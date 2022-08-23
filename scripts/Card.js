import {closePopup, openPopup} from './index.js';

export const popupElementImage = document.querySelector('.popup_image');
const popupCloseImage = document.querySelector('.popup__close_image');
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');

const container = document
	.querySelector('.template')
	.content.querySelector('.cards');

export class Card {
	constructor(name, link) {
		this._name = name;
		this._link = link;
	}

	_getTemplate() {
		return container.cloneNode(true)
	}

	generateCard() {
		this._element = this._getTemplate();

		this._element.querySelector('.cards__title').textContent = this._name;
		this._element.querySelector('.cards__image').alt = this._name;
		this._element.querySelector('.cards__image').src = this._link;

		const cardDelete = this._element.querySelector('.cards__delete');
		const cardLike = this._element.querySelector('.cards__like');
		const cardImage = this._element.querySelector('.cards__image');

		cardLike.addEventListener('click', this._handleLike);
		cardDelete.addEventListener('click', this._handleDelete);
		cardImage.addEventListener('click', this._openPopup);
		popupCloseImage.addEventListener('click', this._closePopup);


		return this._element;
	}

	_handleLike(event) {
		const buttonLike = event.target;
		buttonLike.classList.toggle('cards__like_active');
	}

	_handleDelete(event) {
		const card = event.target.closest('.cards');
		card.remove();
	}

	_openPopup = () => {
		popupSubtitle.textContent = this._name;
		popupImage.alt = this._name;
		popupImage.src = this._link;
		openPopup(popupElementImage)
	}

	_closePopup = () => {
		closePopup(popupElementImage);
	}

}



