export const initialCards = [
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

export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupImage = document.querySelector('.popup_image');

export const popupEditOpen = document.querySelector('.profile__edit-button');
export const popupAddOpen = document.querySelector('.profile__add-button');

export const nameInput = document.querySelector('.popup__input_type_name');
export const profileName = document.querySelector('.profile__title');
export const professionInput = document.querySelector('.popup__input_type_prof');
export const profileAbout = document.querySelector('.profile__subtitle');
export const formAdd = document.querySelector('.popup__form_add');
export const cardInputName = document.querySelector('.popup__input_type_title');
export const cardInputLink = document.querySelector('.popup__input_type_link');

export const cardsContainer = document.querySelector('.elements__item');

export const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__save-button_invalid',
	inputErrorClass: 'popup__input_type_error',
	errorTextClass: 'popup__error',
};
