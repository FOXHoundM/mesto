import {Popup} from "./Popup.js";

export class PopupWithSubmitForm extends Popup {
	constructor(popup) {
		super(popup);
		this._submitButton = this._popup.querySelector('.popup__save-button')

	}

	changeSubmitHandler(newSubmitHandler) {
		this._handleSubmit = newSubmitHandler;
	}

	setEventListeners() {
		super.setEventListeners();
		this._submitButton.addEventListener('submit', (evt) => {
			evt.preventDefault()
			this._handleSubmit()
		})

	}

}