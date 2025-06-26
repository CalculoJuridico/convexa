// Judicial Assets Animation using Anime.js
class JudicialAssetsAnimation {
  constructor() {
    this.animationContainer = null;
    this.isPlaying = false;
    this.timeline = null;
    this.init();
  }

  init() {
    this.createAnimationContainer();
    this.setupAnimation();
    this.startAnimation();
  }

  createAnimationContainer() {
    const heroImageContainer = document.querySelector('.hero-image-container');
    if (!heroImageContainer) return;

    // Hide the static image
    const staticImage = heroImageContainer.querySelector('.hero-static-image');
    if (staticImage) {
      staticImage.style.display = 'none';
    }

    // Create animation container
    this.animationContainer = document.createElement('div');
    this.animationContainer.className = 'judicial-animation-container';
    this.animationContainer.innerHTML = this.getAnimationHTML();
    
    heroImageContainer.appendChild(this.animationContainer);
  }

  getAnimationHTML() {
    return `
      <div class="animation-wrapper" style="position: relative; width: 100%; height: 600px; overflow: hidden;">
        
        <!-- Phase 1: Legal Process -->
        <div class="legal-process phase" data-phase="1">
          <div class="courthouse" style="position: absolute; top: 50px; left: 50px; opacity: 0;">
            <div class="building-base" style="width: 80px; height: 60px; background: linear-gradient(135deg, #4A6FFF, #6366F1); border-radius: 8px; position: relative;">
              <div class="pillar" style="position: absolute; top: -10px; left: 10px; width: 8px; height: 70px; background: #fff; opacity: 0.9;"></div>
              <div class="pillar" style="position: absolute; top: -10px; left: 30px; width: 8px; height: 70px; background: #fff; opacity: 0.9;"></div>
              <div class="pillar" style="position: absolute; top: -10px; left: 50px; width: 8px; height: 70px; background: #fff; opacity: 0.9;"></div>
              <div class="roof" style="position: absolute; top: -15px; left: -5px; width: 90px; height: 15px; background: #333; border-radius: 4px 4px 0 0;"></div>
              <div class="scales-icon" style="position: absolute; top: 20px; left: 30px; width: 20px; height: 20px; color: #fff; text-align: center; line-height: 20px; font-size: 16px;">⚖️</div>
            </div>
          </div>
          
          <div class="legal-document" style="position: absolute; top: 150px; left: 80px; opacity: 0;">
            <div class="document" style="width: 60px; height: 80px; background: #fff; border: 2px solid #4A6FFF; border-radius: 4px; position: relative;">
              <div class="header" style="height: 15px; background: rgba(74, 111, 255, 0.1); border-radius: 2px 2px 0 0; margin: 2px;"></div>
              <div class="content" style="margin: 5px; height: 50px;">
                <div class="line" style="height: 2px; background: #E6E6E6; margin: 3px 0; border-radius: 1px;"></div>
                <div class="line" style="height: 2px; background: #E6E6E6; margin: 3px 0; border-radius: 1px;"></div>
                <div class="line" style="height: 2px; background: #E6E6E6; margin: 3px 0; border-radius: 1px;"></div>
                <div class="line" style="height: 2px; background: #E6E6E6; margin: 3px 0; border-radius: 1px; width: 70%;"></div>
              </div>
              <div class="stamp" style="position: absolute; bottom: 5px; right: 5px; width: 15px; height: 15px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 8px;">✓</div>
            </div>
          </div>
        </div>

        <!-- Phase 2: Assessment & Analysis -->
        <div class="assessment phase" data-phase="2">
          <div class="analysis-chart" style="position: absolute; top: 80px; right: 100px; opacity: 0;">
            <div class="chart-container" style="width: 120px; height: 80px; background: rgba(74, 111, 255, 0.1); border-radius: 8px; padding: 10px; position: relative;">
              <div class="chart-bars" style="display: flex; align-items: end; height: 60px; gap: 8px;">
                <div class="bar bar-1" style="width: 12px; height: 20px; background: #4A6FFF; border-radius: 2px 2px 0 0;"></div>
                <div class="bar bar-2" style="width: 12px; height: 35px; background: #4A6FFF; border-radius: 2px 2px 0 0;"></div>
                <div class="bar bar-3" style="width: 12px; height: 45px; background: #4A6FFF; border-radius: 2px 2px 0 0;"></div>
                <div class="bar bar-4" style="width: 12px; height: 55px; background: #4A6FFF; border-radius: 2px 2px 0 0;"></div>
                <div class="bar bar-5" style="width: 12px; height: 40px; background: #4A6FFF; border-radius: 2px 2px 0 0;"></div>
              </div>
              <div class="trend-line" style="position: absolute; top: 15px; left: 15px; width: 90px; height: 2px; background: #10B981; transform: rotate(-10deg); border-radius: 1px;"></div>
            </div>
          </div>

          <div class="risk-gauge" style="position: absolute; top: 200px; right: 50px; opacity: 0;">
            <div class="gauge" style="width: 80px; height: 40px; border: 3px solid #E6E6E6; border-bottom: none; border-radius: 80px 80px 0 0; position: relative;">
              <div class="needle" style="position: absolute; bottom: 0; left: 50%; width: 2px; height: 35px; background: #10B981; transform-origin: bottom; transform: translateX(-50%) rotate(-30deg); border-radius: 1px;"></div>
              <div class="center-dot" style="position: absolute; bottom: -3px; left: 50%; width: 6px; height: 6px; background: #333; border-radius: 50%; transform: translateX(-50%);"></div>
            </div>
            <div class="risk-label" style="text-align: center; margin-top: 5px; font-size: 10px; color: #10B981; font-weight: bold;">BAIXO</div>
          </div>
        </div>

        <!-- Phase 3: Valuation -->
        <div class="valuation phase" data-phase="3">
          <div class="calculator" style="position: absolute; top: 120px; left: 200px; opacity: 0;">
            <div class="calc-container" style="width: 100px; height: 120px; background: #fff; border: 2px solid #4A6FFF; border-radius: 8px; padding: 8px;">
              <div class="calc-display" style="height: 20px; background: #333; color: #0f0; text-align: right; padding: 2px 5px; font-size: 10px; border-radius: 2px; margin-bottom: 5px;">R$ 85.000</div>
              <div class="calc-buttons" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;">
                <div class="btn" style="background: #f0f0f0; border-radius: 2px; height: 15px;"></div>
                <div class="btn" style="background: #f0f0f0; border-radius: 2px; height: 15px;"></div>
                <div class="btn" style="background: #f0f0f0; border-radius: 2px; height: 15px;"></div>
                <div class="btn" style="background: #f0f0f0; border-radius: 2px; height: 15px;"></div>
                <div class="btn" style="background: #f0f0f0; border-radius: 2px; height: 15px;"></div>
                <div class="btn" style="background: #f0f0f0; border-radius: 2px; height: 15px;"></div>
              </div>
            </div>
          </div>

          <div class="discount-indicator" style="position: absolute; top: 180px; left: 240px; opacity: 0;">
            <div class="discount-badge" style="background: linear-gradient(135deg, #10B981, #3B82F6); color: #fff; padding: 8px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; position: relative;">
              15% DESÁGIO
              <div class="arrow" style="position: absolute; bottom: -8px; left: 50%; width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid #10B981; transform: translateX(-50%);"></div>
            </div>
          </div>
        </div>

        <!-- Phase 4: Transaction -->
        <div class="transaction phase" data-phase="4">
          <div class="money-transfer" style="position: absolute; top: 250px; left: 150px; opacity: 0;">
            <div class="money-flow" style="display: flex; align-items: center; gap: 15px;">
              <div class="from-account" style="width: 60px; height: 40px; background: #fff; border: 2px solid #4A6FFF; border-radius: 6px; display: flex; align-items: center; justify-content: center; position: relative;">
                <span style="font-size: 20px;">🏛️</span>
                <div class="account-label" style="position: absolute; bottom: -20px; font-size: 8px; color: #666; text-align: center; width: 100%;">RHILO</div>
              </div>
              
              <div class="transfer-arrow" style="position: relative;">
                <div class="arrow-line" style="width: 40px; height: 2px; background: #10B981; position: relative;">
                  <div class="arrow-head" style="position: absolute; right: -3px; top: -3px; width: 0; height: 0; border-left: 6px solid #10B981; border-top: 4px solid transparent; border-bottom: 4px solid transparent;"></div>
                </div>
                <div class="money-symbol" style="position: absolute; top: -15px; left: 15px; color: #10B981; font-weight: bold; font-size: 12px;">R$</div>
              </div>
              
              <div class="to-account" style="width: 60px; height: 40px; background: #fff; border: 2px solid #10B981; border-radius: 6px; display: flex; align-items: center; justify-content: center; position: relative;">
                <span style="font-size: 16px;">👨‍💼</span>
                <div class="account-label" style="position: absolute; bottom: -20px; font-size: 8px; color: #666; text-align: center; width: 100%;">ADVOGADO</div>
              </div>
            </div>
          </div>

          <div class="contract-signing" style="position: absolute; top: 320px; left: 180px; opacity: 0;">
            <div class="contract" style="width: 50px; height: 60px; background: #fff; border: 1px solid #4A6FFF; border-radius: 3px; position: relative;">
              <div class="signature-line" style="position: absolute; bottom: 10px; left: 5px; width: 40px; height: 1px; background: #4A6FFF;"></div>
              <div class="signature-line" style="position: absolute; bottom: 6px; left: 5px; width: 30px; height: 1px; background: #4A6FFF;"></div>
              <div class="pen" style="position: absolute; bottom: 8px; right: 8px; width: 15px; height: 2px; background: #333; border-radius: 1px; transform: rotate(45deg);"></div>
            </div>
          </div>
        </div>

        <!-- Phase 5: Fund Integration -->
        <div class="fund-integration phase" data-phase="5">
          <div class="investment-fund" style="position: absolute; top: 100px; right: 200px; opacity: 0;">
            <div class="fund-container" style="width: 100px; height: 80px; background: linear-gradient(135deg, #4A6FFF, #6366F1); border-radius: 12px; position: relative; display: flex; align-items: center; justify-content: center;">
              <div class="fund-icon" style="color: #fff; font-size: 24px;">📊</div>
              <div class="fund-label" style="position: absolute; bottom: -25px; left: 0; right: 0; text-align: center; font-size: 10px; color: #4A6FFF; font-weight: bold;">FIDC</div>
            </div>
          </div>

          <div class="portfolio-diversification" style="position: absolute; top: 220px; right: 150px; opacity: 0;">
            <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; width: 90px;">
              <div class="asset-1" style="width: 25px; height: 25px; background: #4A6FFF; border-radius: 3px;"></div>
              <div class="asset-2" style="width: 25px; height: 25px; background: #10B981; border-radius: 3px;"></div>
              <div class="asset-3" style="width: 25px; height: 25px; background: #3B82F6; border-radius: 3px;"></div>
              <div class="asset-4" style="width: 25px; height: 25px; background: #6366F1; border-radius: 3px;"></div>
              <div class="asset-5" style="width: 25px; height: 25px; background: #8B5CF6; border-radius: 3px;"></div>
              <div class="asset-6" style="width: 25px; height: 25px; background: #EF4444; border-radius: 3px;"></div>
            </div>
            <div class="diversification-label" style="text-align: center; margin-top: 8px; font-size: 8px; color: #666;">DIVERSIFICAÇÃO</div>
          </div>

          <div class="investors" style="position: absolute; top: 320px; right: 200px; opacity: 0;">
            <div class="investor-group" style="display: flex; gap: 5px;">
              <div class="investor" style="width: 20px; height: 20px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 10px;">👤</div>
              <div class="investor" style="width: 20px; height: 20px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 10px;">👤</div>
              <div class="investor" style="width: 20px; height: 20px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 10px;">👤</div>
            </div>
            <div class="investor-label" style="text-align: center; margin-top: 5px; font-size: 8px; color: #666;">INVESTIDORES</div>
          </div>
        </div>

        <!-- Phase 6: Returns -->
        <div class="returns phase" data-phase="6">
          <div class="payment-received" style="position: absolute; top: 150px; left: 300px; opacity: 0;">
            <div class="government-payment" style="width: 80px; height: 50px; background: linear-gradient(135deg, #FFDD00, #FFA500); border-radius: 8px; display: flex; align-items: center; justify-content: center; position: relative;">
              <span style="font-size: 20px;">🏛️</span>
              <div class="payment-arrow" style="position: absolute; top: -15px; right: 10px; color: #10B981; font-size: 16px;">💰</div>
            </div>
            <div class="payment-label" style="text-align: center; margin-top: 5px; font-size: 8px; color: #666;">PAGAMENTO GOVERNO</div>
          </div>

          <div class="returns-flow" style="position: absolute; top: 250px; left: 280px; opacity: 0;">
            <div class="returns-container" style="display: flex; align-items: center; gap: 10px;">
              <div class="profit-indicator" style="background: linear-gradient(135deg, #10B981, #3B82F6); color: #fff; padding: 5px 10px; border-radius: 15px; font-size: 11px; font-weight: bold;">
                15-25% a.a.
              </div>
              <div class="arrow-to-investors" style="width: 30px; height: 2px; background: #10B981; position: relative;">
                <div class="arrow-head" style="position: absolute; right: -3px; top: -3px; width: 0; height: 0; border-left: 6px solid #10B981; border-top: 4px solid transparent; border-bottom: 4px solid transparent;"></div>
              </div>
              <div class="happy-investors" style="display: flex; gap: 3px;">
                <div class="investor-happy" style="width: 18px; height: 18px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 8px;">😊</div>
                <div class="investor-happy" style="width: 18px; height: 18px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 8px;">😊</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Connecting Flow Lines -->
        <svg class="flow-lines" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1;">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#4A6FFF" opacity="0.6" />
            </marker>
          </defs>
          
          <!-- Phase connections -->
          <path class="flow-line line-1" d="M 150 200 Q 200 180 250 200" stroke="#4A6FFF" stroke-width="2" fill="none" opacity="0" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
          <path class="flow-line line-2" d="M 300 220 Q 350 200 400 220" stroke="#4A6FFF" stroke-width="2" fill="none" opacity="0" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
          <path class="flow-line line-3" d="M 250 300 Q 300 280 350 300" stroke="#4A6FFF" stroke-width="2" fill="none" opacity="0" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
          <path class="flow-line line-4" d="M 350 350 Q 400 330 450 350" stroke="#4A6FFF" stroke-width="2" fill="none" opacity="0" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
          <path class="flow-line line-5" d="M 450 280 Q 500 260 550 280" stroke="#4A6FFF" stroke-width="2" fill="none" opacity="0" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
        </svg>

        <!-- Floating Elements -->
        <div class="floating-elements">
          <div class="float-element money-1" style="position: absolute; top: 80px; left: 300px; opacity: 0; color: #10B981; font-size: 16px;">💰</div>
          <div class="float-element money-2" style="position: absolute; top: 120px; left: 450px; opacity: 0; color: #10B981; font-size: 16px;">💰</div>
          <div class="float-element document-1" style="position: absolute; top: 180px; left: 380px; opacity: 0; color: #4A6FFF; font-size: 16px;">📄</div>
          <div class="float-element growth-1" style="position: absolute; top: 220px; left: 320px; opacity: 0; color: #10B981; font-size: 16px;">📈</div>
        </div>

        <!-- Timeline Progress Bar -->
        <div class="timeline-progress" style="position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); width: 80%; height: 4px; background: rgba(74, 111, 255, 0.2); border-radius: 2px;">
          <div class="progress-fill" style="width: 0%; height: 100%; background: linear-gradient(90deg, #4A6FFF, #10B981); border-radius: 2px; transition: width 0.5s ease;"></div>
        </div>

        <!-- Phase Labels -->
        <div class="phase-labels" style="position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%); width: 80%; display: flex; justify-content: space-between;">
          <span class="phase-label" style="font-size: 8px; color: #666; text-align: center;">PROCESSO</span>
          <span class="phase-label" style="font-size: 8px; color: #666; text-align: center;">ANÁLISE</span>
          <span class="phase-label" style="font-size: 8px; color: #666; text-align: center;">AVALIAÇÃO</span>
          <span class="phase-label" style="font-size: 8px; color: #666; text-align: center;">AQUISIÇÃO</span>
          <span class="phase-label" style="font-size: 8px; color: #666; text-align: center;">FUNDO</span>
          <span class="phase-label" style="font-size: 8px; color: #666; text-align: center;">RETORNO</span>
        </div>
      </div>
    `;
  }

  setupAnimation() {
    this.timeline = anime.timeline({
      autoplay: false,
      loop: true,
      direction: 'normal',
      easing: 'easeOutExpo'
    });

    // Phase 1: Legal Process (0-3s)
    this.timeline
      .add({
        targets: '.courthouse',
        opacity: [0, 1],
        translateY: [-20, 0],
        scale: [0.8, 1],
        duration: 800,
        easing: 'easeOutBack'
      })
      .add({
        targets: '.legal-document',
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: 600,
        easing: 'easeOutQuad'
      }, '-=200')
      .add({
        targets: '.legal-document .stamp',
        scale: [0, 1.2, 1],
        duration: 400,
        easing: 'easeOutBack'
      }, '-=100')
      
      // Phase 2: Assessment & Analysis (3-6s)
      .add({
        targets: '.analysis-chart',
        opacity: [0, 1],
        translateX: [30, 0],
        duration: 600
      }, '+=500')
      .add({
        targets: '.chart-container .bar',
        scaleY: [0, 1],
        duration: 400,
        delay: anime.stagger(100),
        easing: 'easeOutBounce'
      }, '-=300')
      .add({
        targets: '.risk-gauge',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 500
      }, '-=200')
      .add({
        targets: '.gauge .needle',
        rotate: [-60, -30],
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
      }, '-=200')
      
      // Phase 3: Valuation (6-9s)
      .add({
        targets: '.calculator',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 500
      }, '+=300')
      .add({
        targets: '.calc-display',
        backgroundColor: ['#333', '#0f0', '#333'],
        duration: 1000,
        direction: 'alternate',
        loop: 2
      }, '-=200')
      .add({
        targets: '.discount-indicator',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutBack'
      }, '-=400')
      
      // Phase 4: Transaction (9-12s)
      .add({
        targets: '.money-transfer',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 600
      }, '+=400')
      .add({
        targets: '.transfer-arrow .arrow-line',
        scaleX: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
      }, '-=200')
      .add({
        targets: '.money-symbol',
        translateX: [-10, 30],
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeInQuad'
      }, '-=600')
      .add({
        targets: '.contract-signing',
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 500
      }, '-=300')
      .add({
        targets: '.pen',
        rotate: [45, 25, 45],
        duration: 600,
        easing: 'easeInOutQuad'
      }, '-=200')
      
      // Phase 5: Fund Integration (12-15s)
      .add({
        targets: '.investment-fund',
        opacity: [0, 1],
        scale: [0.8, 1.1, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .6)'
      }, '+=300')
      .add({
        targets: '.portfolio-diversification',
        opacity: [0, 1],
        duration: 500
      }, '-=400')
      .add({
        targets: '.portfolio-grid > div',
        scale: [0, 1],
        duration: 300,
        delay: anime.stagger(80),
        easing: 'easeOutBack'
      }, '-=300')
      .add({
        targets: '.investors',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600
      }, '-=200')
      .add({
        targets: '.investor',
        scale: [1, 1.2, 1],
        duration: 400,
        delay: anime.stagger(100),
        easing: 'easeOutBack'
      }, '-=300')
      
      // Phase 6: Returns (15-18s)
      .add({
        targets: '.payment-received',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 600
      }, '+=400')
      .add({
        targets: '.payment-arrow',
        translateY: [-10, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutBounce'
      }, '-=300')
      .add({
        targets: '.returns-flow',
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600
      }, '-=200')
      .add({
        targets: '.profit-indicator',
        scale: [1, 1.1, 1],
        duration: 600,
        easing: 'easeInOutQuad'
      }, '-=300')
      .add({
        targets: '.investor-happy',
        rotate: [0, 360],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutBack'
      }, '-=300')
      
      // Flow Lines Animation
      .add({
        targets: '.flow-line',
        opacity: [0, 0.6],
        strokeDashoffset: [100, 0],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutQuad'
      }, 1000)
      
      // Floating Elements
      .add({
        targets: '.float-element',
        opacity: [0, 0.8, 0],
        translateY: [0, -30],
        duration: 2000,
        delay: anime.stagger(300, {start: 2000}),
        easing: 'easeOutQuad'
      }, 2000)
      
      // Progress Bar
      .add({
        targets: '.progress-fill',
        width: ['0%', '16.66%', '33.33%', '50%', '66.66%', '83.33%', '100%'],
        duration: 18000,
        easing: 'linear'
      }, 0);
  }

  startAnimation() {
    if (this.timeline) {
      this.timeline.play();
      this.isPlaying = true;
    }
  }

  pauseAnimation() {
    if (this.timeline) {
      this.timeline.pause();
      this.isPlaying = false;
    }
  }

  restartAnimation() {
    if (this.timeline) {
      this.timeline.restart();
      this.isPlaying = true;
    }
  }
}

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize on pages with hero section
  if (document.querySelector('.hero-image-container')) {
    new JudicialAssetsAnimation();
  }
});

// Add responsive behavior
window.addEventListener('resize', function() {
  // Handle responsive adjustments if needed
  const animationContainer = document.querySelector('.judicial-animation-container');
  if (animationContainer) {
    // Adjust animation container size based on screen size
    const wrapper = animationContainer.querySelector('.animation-wrapper');
    if (wrapper) {
      if (window.innerWidth < 768) {
        wrapper.style.height = '400px';
      } else {
        wrapper.style.height = '600px';
      }
    }
  }
});