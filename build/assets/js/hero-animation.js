document.addEventListener('DOMContentLoaded', function() {
  // Get the hero image element
  const heroImage = document.querySelector('.hero-static-image');
  
  if (heroImage) {
    // Apply subtle floating animation to the hero image
    applyFloatingAnimation(heroImage);
  }
});

/**
 * Applies a subtle floating animation to an element
 * @param {HTMLElement} element - The element to animate
 */
function applyFloatingAnimation(element) {
  // Initial position
  let startPositionY = 0;
  let animationFrame;
  
  // Create a subtle floating effect with a small amplitude
  function float() {
    const time = Date.now() / 2000; // Slow down the animation
    const amplitude = 5; // Very small movement (5px)
    
    // Calculate the new Y position using a sine wave for smooth movement
    const newPositionY = startPositionY + Math.sin(time) * amplitude;
    
    // Apply transform with very subtle movement
    element.style.transform = `translateY(${newPositionY}px)`;
    
    // Continue the animation
    animationFrame = requestAnimationFrame(float);
  }
  
  // Start the animation
  float();
  
  // Stop animation when page is not visible to save resources
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else {
      float();
    }
  });
}