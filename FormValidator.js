class FormValidator {
  constructor(formElement, settings) {
    this.formElement = formElement;
    this.settings = settings;
    this.inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    this.saveButton = formElement.querySelector(settings.submitButtonSelector);
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.textContent = '';
  }

  checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  validateForm() {
    const isFormValid = this.formElement.checkValidity();
    this.saveButton.disabled = !isFormValid;
    this.saveButton.classList.toggle('save_inactive', !isFormValid);
  }

  setEventListeners() {
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.checkInputValidity(inputElement);
        this.validateForm();
      });
    });
  }
}

export default FormValidator;