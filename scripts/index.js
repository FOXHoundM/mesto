import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
	},
];

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');

const popupEditCloseBtn = document.querySelector('.popup__close_edit');
const popupAddCloseBtn = document.querySelector('.popup__close_add');
const popupCloseImageBtn = document.querySelector('.popup__close_image');

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

const section = document.querySelector('.elements');
const cardsContainer = section.querySelector('.elements__item');

const showImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__save-button_invalid',
	inputErrorClass: 'popup__input_type_error',
	errorTextClass: 'popup__error',
};

const editFormValidator = new FormValidator(validationConfig, popupEdit);
const addFormValidator = new FormValidator(validationConfig, popupAdd);

const closeOnEscape = (evt) => {
	if (evt.key === 'Escape') {
		const activePopup = document.querySelector('.popup_opened');
		closePopup(activePopup);
	}
};

const closeOnOverlay = (evt) => {
	if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
		closePopup(evt.target);
	}
};

const openPopup = (popup) => {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeOnEscape);
};

const closePopup = (popup) => {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeOnEscape);
};

const handleOpenPopup = (name, link) => {
	popupSubtitle.textContent = name;
	showImage.alt = name;
	showImage.src = link;
	openPopup(popupImage);
}

function createCard(item) {

	const card = new Card(item.name, item.link, handleOpenPopup);

	const cardElement = card.generateCard();

	cardsContainer.prepend(cardElement)
}

function submitForm(evt) {
	evt.preventDefault();

	popupName.textContent = nameInput.value;
	popupProf.textContent = professionInput.value;

	closePopup(popupEdit);
	editFormValidator.disabledButton()
}

formAdd.addEventListener('submit', function (event) {
	event.preventDefault();

	const newCard = {
		name: cardInputName.value,
		link: cardInputLink.value,
	}

	createCard(newCard);

	closePopup(popupAdd);

	addFormValidator.disabledButton()
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

popupEditCloseBtn.addEventListener('click', function () {
	closePopup(popupEdit);
});

popupAddCloseBtn.addEventListener('click', function () {
	closePopup(popupAdd);
});

popupCloseImageBtn.addEventListener('click', () => {
	closePopup(popupImage)
});

popupEdit.addEventListener('click', closeOnOverlay);
popupAdd.addEventListener('click', closeOnOverlay);
popupImage.addEventListener('click', closeOnOverlay);

popupFormEdit.addEventListener('submit', submitForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
initialCards.forEach(createCard)

