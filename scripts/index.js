import {createCard, popupElementImage} from "./Card.js";


const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');

const popupEditClose = document.querySelector('.popup__close_edit');
const popupAddClose = document.querySelector('.popup__close_add');

const popupEditOpen = document.querySelector('.profile__edit-button');
const popupAddOpen = document.querySelector('.profile__add-button');

const popupFormEdit = document.querySelector('.popup__form_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const popupName = document.querySelector('.profile__title');
const professionInput = document.querySelector('.popup__input_type_prof');
const popupProf = document.querySelector('.profile__subtitle');
const formAdd = document.querySelector('.popup__form_add');
const cardInputName = document.querySelector('.popup__input_type_title');
const cardInputLink = document.querySelector('.popup__input_type_link');

// const section = document.querySelector('.elements');
// const cardsContainer = section.querySelector('.elements__item');

const buttonElement = document.querySelector('.popup__save-button');

const formElementList = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__save-button_invalid',
	inputErrorClass: 'popup__input_type_error',
	errorTextClass: 'popup__error',
};

const closeOnEscape = (evt) => {
	if (evt.key === 'Escape') {
		const activePopup = document.querySelector('.popup_opened');
		closePopup(activePopup);
	}
};

const closeOnOverlay = (evt) => {
	if (evt.target.classList.contains('popup_opened')) {
		closePopup(evt.target);
	}
};

export const openPopup = (popup) => {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeOnEscape);
};

export const closePopup = (popup) => {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeOnEscape);
};

function submitForm(evt) {
	evt.preventDefault();

	popupName.textContent = nameInput.value;
	popupProf.textContent = professionInput.value;

	closePopup(popupEdit);
	disabledButton(buttonElement, formElementList);
}



formAdd.addEventListener('submit', function (event) {
	event.preventDefault();

	const newCard = {
		name: cardInputName.value,
		link: cardInputLink.value,
	}

	createCard(newCard);

	closePopup(popupAdd);

	disabledButton(buttonElement, formElementList);
});

popupEditOpen.addEventListener('click', function () {
	openPopup(popupEdit);
	nameInput.value = popupName.textContent;
	professionInput.value = popupProf.textContent;
});

popupAddOpen.addEventListener('click', function () {
	openPopup(popupAdd);
	formAdd.reset();
});

popupEditClose.addEventListener('click', function () {
	closePopup(popupEdit);
});

popupAddClose.addEventListener('click', function () {
	closePopup(popupAdd);
});

popupEdit.addEventListener('click', closeOnOverlay);
popupAdd.addEventListener('click', closeOnOverlay);
popupElementImage.addEventListener('click', closeOnOverlay);

popupFormEdit.addEventListener('submit', submitForm);


