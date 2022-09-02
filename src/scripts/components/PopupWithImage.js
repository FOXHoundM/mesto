import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._showImage = document.querySelector('.popup__image');
		this._popupSubtitle = document.querySelector('.popup__subtitle');
	}

	open(name, link) {
		this._showImage.src = link;
		this._showImage.alt = name;
		this._popupSubtitle.textContent = name;
		super.open();
	}

	setEventListeners() {
		super.setEventListeners();
	}
}
