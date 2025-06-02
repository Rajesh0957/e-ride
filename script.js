function navigateTo(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  navigateTo('programme-entry');

  // Fix Login Navigation
  const loginBtn = document.querySelector('#login button');
  if (loginBtn) {
    loginBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent page reload
      navigateTo('home');     // Navigate to Home screen
    });
  }
});
