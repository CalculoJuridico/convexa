const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Environment variables from Firebase config
const TURNSTILE_SECRET_KEY = functions.config().turnstile?.secret_key || '0x4AAAAAABoXZsOCVKs2691pjSB3GL10lQE';
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/triggers/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';

/**
 * Verify Cloudflare Turnstile token
 */
async function verifyTurnstile(token, remoteip = null) {
  try {
    const formData = new URLSearchParams();
    formData.append('secret', TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    if (remoteip) {
      formData.append('remoteip', remoteip);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    const result = await response.json();
    functions.logger.info('Turnstile verification result:', result);
    
    return result.success === true;
  } catch (error) {
    functions.logger.error('Turnstile verification error:', error);
    return false;
  }
}

/**
 * Send webhook to Slack
 */
async function sendSlackWebhook(formData) {
  try {
    // Format the message for Slack
    const message = `🚀 *Nova Submissão de Formulário SaaS - Convexa*

👤 *Nome:* ${formData.fullName}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsapp}
🎯 *Tipo de Produto:* ${formData.serviceType}
👥 *Audiência:* ${formData.audienceSize}
${formData.revenue ? `💰 *Faturamento:* ${formData.revenue}` : ''}

${formData.businessDescription ? `📝 *Sobre o negócio:*\n${formData.businessDescription}` : ''}

📅 *Data:* ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
🌐 *IP:* ${formData.ip || 'N/A'}`;

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message
      }),
    });

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.status} ${response.statusText}`);
    }

    functions.logger.info('Slack webhook sent successfully');
    return true;
  } catch (error) {
    functions.logger.error('Slack webhook error:', error);
    return false;
  }
}

/**
 * Validate form data
 */
function validateFormData(data) {
  const required = ['fullName', 'email', 'whatsapp', 'serviceType', 'audienceSize'];
  const missing = required.filter(field => !data[field] || data[field].trim() === '');
  
  if (missing.length > 0) {
    return { valid: false, message: `Missing required fields: ${missing.join(', ')}` };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, message: 'Invalid email format' };
  }

  return { valid: true };
}

/**
 * Save form submission to Firestore
 */
async function saveSubmission(data) {
  try {
    const db = admin.firestore();
    const submission = {
      ...data,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      processed: true
    };
    
    const docRef = await db.collection('saas_submissions').add(submission);
    functions.logger.info('Form submission saved to Firestore:', docRef.id);
    return docRef.id;
  } catch (error) {
    functions.logger.error('Error saving to Firestore:', error);
    throw error;
  }
}

/**
 * Main function to handle SaaS form submissions
 */
exports.submitSaasForm = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST.'
    });
  }

  try {
    const {
      fullName,
      email,
      whatsapp,
      serviceType,
      audienceSize,
      revenue,
      businessDescription,
      turnstileToken
    } = req.body;

    // Get client IP
    const clientIP = req.headers['x-forwarded-for'] || 
                    req.headers['x-real-ip'] || 
                    req.connection?.remoteAddress || 
                    req.socket?.remoteAddress || 
                    'unknown';

    functions.logger.info('Form submission received from IP:', clientIP);

    // Validate required Turnstile token
    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        message: 'Turnstile verification required'
      });
    }

    // Verify Turnstile token
    const isTurnstileValid = await verifyTurnstile(turnstileToken, clientIP);
    if (!isTurnstileValid) {
      functions.logger.warn('Turnstile verification failed for IP:', clientIP);
      return res.status(400).json({
        success: false,
        message: 'Security verification failed. Please try again.'
      });
    }

    functions.logger.info('Turnstile verification successful');

    // Prepare form data
    const formData = {
      fullName: fullName?.trim(),
      email: email?.trim().toLowerCase(),
      whatsapp: whatsapp?.trim(),
      serviceType,
      audienceSize,
      revenue: revenue || null,
      businessDescription: businessDescription?.trim() || null,
      ip: clientIP
    };

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.message
      });
    }

    // Save to Firestore
    const submissionId = await saveSubmission(formData);

    // Send Slack webhook
    const slackSent = await sendSlackWebhook(formData);
    if (!slackSent) {
      functions.logger.warn('Slack webhook failed, but form was saved');
    }

    // Generate WhatsApp URL for response
    const whatsappMessage = `*Interesse em SaaS Personalizado - Convexa*\n\nOlá! Tenho interesse em ter meu próprio app SaaS com a Convexa.\n\n*👤 Nome:* ${formData.fullName}\n*📧 Email:* ${formData.email}\n*📱 WhatsApp:* ${formData.whatsapp}\n*🎯 Tipo de Produto:* ${formData.serviceType}\n*👥 Audiência:* ${formData.audienceSize}\n${formData.revenue ? `*💰 Faturamento:* ${formData.revenue}\n` : ''}${formData.businessDescription ? `\n*📝 Sobre o negócio:*\n${formData.businessDescription}\n` : ''}\nGostaria de saber mais sobre como a Convexa pode criar um app para gerar recorrência no meu negócio. Obrigado!`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/message/2WOWTII2LT3OK1?text=${encodedMessage}`;

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully!',
      submissionId: submissionId,
      whatsappUrl: whatsappUrl,
      slackNotified: slackSent
    });

    functions.logger.info('Form submission processed successfully:', submissionId);

  } catch (error) {
    functions.logger.error('Error processing form submission:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

/**
 * Health check endpoint
 */
exports.healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});