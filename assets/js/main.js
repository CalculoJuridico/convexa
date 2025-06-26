// Main JavaScript for Rhilo Investment
document.addEventListener('DOMContentLoaded', function() {
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      if (!name || !email) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Enviando...';
      
      // Simulate API call
      setTimeout(function() {
        submitButton.textContent = '✓ Enviado com Sucesso!';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after delay
        setTimeout(function() {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }, 3000);
      }, 1500);
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });
  
  // General animation on scroll effects
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    root: null, // Use viewport as root
    rootMargin: '0px',
    threshold: 0.2 // Element is 20% visible
  };
  
  const animateOnScrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with animate-on-scroll class
  animateOnScrollElements.forEach(element => {
    animateOnScrollObserver.observe(element);
  });
  
  // Add hover effects to cards and interactive elements
  const interactiveCards = document.querySelectorAll('.card-hover');
  
  interactiveCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('card-hover-active');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('card-hover-active');
    });
  });
});