// Ultra-simple dossier animation script (simplified)
document.addEventListener('DOMContentLoaded', function() {
  const dossierGroup = document.getElementById('dossierGroup');
  if (!dossierGroup) return;
  
  const heroContainer = document.querySelector('.hero-image-container');
  if (!heroContainer) return;
  
  // Add a very subtle floating animation
  const style = document.createElement('style');
  style.textContent = `
    #dossierGroup {
      animation: float 4s ease-in-out infinite alternate;
    }
    
    @keyframes float {
      0% {
        transform: translate(400px, 300px);
      }
      100% {
        transform: translate(400px, 296px);
      }
    }
    
    .hero-image-container:hover #dossierGroup {
      animation: none;
      transform: translate(400px, 297px) rotate(0.5deg);
      transition: transform 0.4s ease;
    }
  `;
  
  document.head.appendChild(style);
});