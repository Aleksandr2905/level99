document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const galleryModal = document.getElementById("gallery-modal")
  const modalImage = document.getElementById("modal-image")
  const modalCaption = document.getElementById("modal-caption")
  const closeModal = document.getElementById("close-modal")
  const galleryImages = document.querySelectorAll(".gallery-image")

  // Función para abrir el modal
  function openModal(imageSrc, imageAlt) {
    modalImage.src = imageSrc
    modalCaption.textContent = imageAlt
    galleryModal.classList.remove("hidden")
    document.body.style.overflow = "hidden" // Prevenir scroll en el fondo
  }

  // Función para cerrar el modal
  function closeModalFunc() {
    galleryModal.classList.add("hidden")
    document.body.style.overflow = "" // Restaurar scroll
  }

  // Añadir event listeners a las imágenes de la galería
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      openModal(image.src, image.alt)
    })
  })

  // Cerrar modal con el botón de cierre
  closeModal.addEventListener("click", closeModalFunc)

  // Cerrar modal al hacer clic fuera de la imagen
  galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) {
      closeModalFunc()
    }
  })

  // Cerrar modal con la tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !galleryModal.classList.contains("hidden")) {
      closeModalFunc()
    }
  })
})

