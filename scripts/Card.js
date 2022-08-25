import {closePopup, openPopup} from './index.js';

const popupImage = document.querySelector('.popup__image')
const popupCloseImageBtn = document.querySelector('.popup__close_image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupElementImage = document.querySelector('.popup_image');



export class Card {
	constructor(name, link) {
		this._name = name;
		this._link = link;
	}

	_getCard() {
		const container = document
			.querySelector('.template')
			.content.querySelector('.cards');

		return container.cloneNode(true)
	}

	generateCard() {
		this._element = this._getCard();

		const cardDelete = this._element.querySelector('.cards__delete');
		const cardLike = this._element.querySelector('.cards__like');
		const cardImage = this._element.querySelector('.cards__image');
		const cardTitle = this._element.querySelector('.cards__title');

		cardTitle.textContent = this._name;
		cardImage.alt = this._name;
		cardImage.src = this._link;

		cardLike.addEventListener('click', this._handleLike);
		cardDelete.addEventListener('click', this._handleDelete);
		cardImage.addEventListener('click', this._openPopup);
		popupCloseImageBtn.addEventListener('click', this._closePopup);


		return this._element;
	}

	_handleLike(event) {
		const buttonLike = event.target;
		buttonLike.classList.toggle('cards__like_active');
	}

	_handleDelete(event) {
		this._element = event.target.closest('.cards');
		this._element.remove();
	}

	_openPopup = () => {
		popupSubtitle.textContent = this._name;
		popupImage.alt = this._name;
		popupImage.src = this._link;
		openPopup(popupElementImage);
	}

	_closePopup = () => {
		closePopup(popupElementImage);
	}

}



