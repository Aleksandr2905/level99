// Este script ayuda a manejar la responsividad específica para los breakpoints de 375px y 1440px
document.addEventListener('DOMContentLoaded', () => {
  // Función para ajustar elementos basados en el ancho de la pantalla
  function adjustForScreenSize() {
    const width = window.innerWidth;
    const isMobile = width <= 375;
    const isDesktop = width >= 1440;

    // Ajustar tamaños de fuente para móviles
    if (isMobile) {
      // Reducir padding en secciones para móviles
      document.querySelectorAll('section').forEach(section => {
        section.style.paddingLeft = '1rem';
        section.style.paddingRight = '1rem';
      });

      // Ajustar tamaño de imágenes en galería
      document.querySelectorAll('.gallery-item img').forEach(img => {
        img.style.height = 'auto';
      });
    }

    // Optimizaciones para escritorio
    if (isDesktop) {
      // Aumentar el ancho máximo del contenedor principal
      document.querySelectorAll('.container').forEach(container => {
        container.style.maxWidth = '1440px';
      });

      // Mejorar el espaciado en escritorio
      document.querySelectorAll('section').forEach(section => {
        section.style.paddingLeft = '2rem';
        section.style.paddingRight = '2rem';
      });
    }
  }

  // Ejecutar al cargar y al cambiar el tamaño de la ventana
  adjustForScreenSize();
  window.addEventListener('resize', adjustForScreenSize);
});
