document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookies = document.getElementById('accept-cookies');
  const declineCookies = document.getElementById('decline-cookies');

  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
      cookieBanner.classList.add('active');
    }, 1000);
  }

  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('active');
  });

  declineCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieBanner.classList.remove('active');
  });
});
