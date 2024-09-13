import Card from './card.js';
import FormValidator from './FormValidator.js';
import { closeOnEsc, closeOnClickOutside, openModal } from './utils.js';

const edit = document.querySelector('#edit');
const popup = document.querySelector('#popup');
const cerraredit = document.querySelector('#cerrar');
const addplace = document.querySelector('#newplace');
const popupplace = document.querySelector('#popupplace');
const cerrarplace = document.querySelector('#cerrarplace');
const dialogPopup = document.getElementById('popup');
const EditarPerfil = document.forms['registrer'];
const inputNombre = EditarPerfil.elements['name'];
const inputCaracteristica = EditarPerfil.elements['breed'];
const h2Person = document.getElementById('person');
const pCaracter = document.querySelector('.caracter');
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const templateGrid = document.getElementById("template-grid");
const post = document.querySelector(".post");
const cerrarImg = document.getElementById("cerrarImg");
const piemodal = document.getElementById("piemodal");

const initialCards = [
  {
    name: "London",
    link: "https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Rusia",
    link: "https://images.unsplash.com/photo-1523509080324-9183f313dc50?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Praga",
    link: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Francia",
    link: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Japon",
    link: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Polonia",
    link: "https://images.unsplash.com/photo-1581700904250-232c641f309e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];




initialCards.forEach(card => {
  const newCard = new Card(card.name, card.link);
  post.append(newCard.getCard());
});

// Initialize form validators
const settings = {
  inputSelector: 'input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.save',
};

const profileForm = document.querySelector('.popup__form[name="registrer"]');
const placeForm = document.querySelector('.popup__form[name="placeForm"]');

const profileFormValidator = new FormValidator(profileForm, settings);
const placeFormValidator = new FormValidator(placeForm, settings);

profileFormValidator.setEventListeners();
placeFormValidator.setEventListeners();

profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (profileForm.querySelector(settings.submitButtonSelector).disabled) {
    return;
  }

  const nuevoNombre = inputNombre.value.trim();
  const nuevaCaracteristica = inputCaracteristica.value.trim();

  h2Person.textContent = nuevoNombre;
  pCaracter.textContent = nuevaCaracteristica;

  popup.close();
});

placeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (placeForm.querySelector(settings.submitButtonSelector).disabled) {
    return;
  }

  const title = document.getElementById('Title').value.trim();
  const url = document.getElementById('Url').value.trim();

  createElement(title, url);
  popupplace.close();
});

function createElement(title, link) {
  const card = new Card(title, link);
  post.append(card.getCard());
}

window.addEventListener('click', closeOnClickOutside);
document.addEventListener('keydown', closeOnEsc);

cerrarImg.addEventListener('click', () => {
  modal.style.display = "none";
  document.removeEventListener("keydown", closeOnEsc);
});

addplace.addEventListener("click", () => {
  popupplace.showModal();
  document.addEventListener("keydown", closeOnEsc);
});

cerrarplace.addEventListener("click", () => {
  popupplace.close();
  document.removeEventListener("keydown", closeOnEsc);
});

edit.addEventListener("click", () => {
  popup.showModal();
  document.addEventListener("keydown", closeOnEsc);
});

cerraredit.addEventListener("click", () => {
  popup.close();
  document.removeEventListener("keydown", closeOnEsc);
});