document.addEventListener('DOMContentLoaded', () => {
  const galleryModal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeModal = document.getElementById('close-modal');
  const galleryImages = document.querySelectorAll('.gallery-image');

  function openModal(imageSrc, imageAlt) {
    modalImage.src = imageSrc;
    modalCaption.textContent = imageAlt;
    galleryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    galleryModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      openModal(image.src, image.alt);
    });
  });

  closeModal.addEventListener('click', closeModalFunc);

  galleryModal.addEventListener('click', e => {
    if (e.target === galleryModal) {
      closeModalFunc();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !galleryModal.classList.contains('hidden')) {
      closeModalFunc();
    }
  });
});
