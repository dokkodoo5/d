export const closeOnEsc = (evt) => {
  if (evt.key === "Escape") {
    if (popup.hasAttribute('open')) {
      popup.close();
    }
    if (popupplace.hasAttribute('open')) {
      popupplace.close();
    }
    if (modal.style.display === "block") { // Cerrar modal si está visible
      modal.style.display = "none";
    }
  }
};

export const closeOnClickOutside = (event) => {
  if (event.target === popup) {
    popup.close();
  }
  if (event.target === popupplace) {
    popupplace.close();
  }
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

export const openModal = (imageUrl, title) => {
  modalImage.src = imageUrl;
  piemodal.textContent = title;
  modal.style.display = "block";
};