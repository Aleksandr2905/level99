document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling for Anchor Links
  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     const targetId = this.getAttribute('href');
  //     if (targetId === '#') return;
  //     const targetElement = document.querySelector(targetId);
  //     if (targetElement) {
  //       window.scrollTo({
  //         top: targetElement.offsetTop - 80,
  //         behavior: 'smooth',
  //       });
  //     }
  //   });
  // });
  // Parallax Effect on Scroll
  // window.addEventListener('scroll', () => {
  //   const scrollPosition = window.pageYOffset;
  //   // Apply parallax effect to elements with the 'parallax' class
  //   document
  //     .querySelectorAll('.stars, .twinkling, .clouds')
  //     .forEach(element => {
  //       const speed = 0.5;
  //       element.style.transform = `translateY(${scrollPosition * speed}px)`;
  //     });
  // });
  // // Animation on Scroll
  // const animateOnScroll = () => {
  //   const elements = document.querySelectorAll(
  //     '.feature-card, .gallery-item, .testimonial-card'
  //   );
  //   elements.forEach(element => {
  //     const elementPosition = element.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     if (elementPosition < windowHeight - 100) {
  //       element.classList.add('animate__animated', 'animate__fadeInUp');
  //     }
  //   });
  // };
  // // Run animation check on load and scroll
  // window.addEventListener('load', animateOnScroll);
  // window.addEventListener('scroll', animateOnScroll);
});
