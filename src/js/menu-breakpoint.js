document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.querySelector('[data-mobile-open]');
  const mobileMenu = document.querySelector('#mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active')
      ? 'hidden'
      : 'auto';
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  function adjustMenuForScreenSize() {
    const width = window.innerWidth;

    if (width < 768) {
      // Mobile view
      document.querySelector('.desktop-menu').style.display = 'none';
      document.querySelector('.mobile-menu-button').style.display = 'block';
    } else {
      // Desktop view
      document.querySelector('.desktop-menu').style.display = 'flex';
      document.querySelector('.mobile-menu-button').style.display = 'none';

      mobileMenu.classList.remove('active');
    }
  }

  adjustMenuForScreenSize();
  window.addEventListener('resize', adjustMenuForScreenSize);
});
