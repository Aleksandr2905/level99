document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
    modalItems: document.querySelectorAll('.nav-item'),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modalItems.forEach(item => {
    item.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    if (refs.modal.classList.contains('is-hidden')) {
      document.documentElement.style.overflow = 'auto';
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  });
});
