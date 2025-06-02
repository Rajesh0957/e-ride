function navigateTo(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  // Show target screen
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }

  // Update active state in bottom nav if present
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-item[data-target="${screenId}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  navigateTo('programme-entry');

  // Bottom nav item click handlers
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      if (target) navigateTo(target);
    });
  });

  // Direct buttons to other screens
  document.querySelectorAll('[data-nav]').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-nav');
      if (target) navigateTo(target);
    });
  });
});
