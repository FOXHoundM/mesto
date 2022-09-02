export class Popup {
	constructor(popupSelector) {
		this._popupSelector = popupSelector;
		this._popups = document.querySelectorAll('.popup');
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	_handleEscClose(event) {
		if (event.key === 'Escape') {
			this._activePopup = document.querySelector('.popup_opened');
			this.close(this._activePopup);
		}
	}

	open() {
		this._popupSelector.classList.add('popup_opened');
		document.addEventListener('keydown', this._handleEscClose);
	}

	close() {
		this._popupSelector.classList.remove('popup_opened');
		document.removeEventListener('keydown', this._handleEscClose);
	}

	setEventListeners() {
		this._popups.forEach((popup) => {
			popup.addEventListener('click', (evt) => {
				if (
					evt.target.classList.contains('popup__close') ||
					evt.target === evt.currentTarget
				) {
					this.close();
				}
			});
		});
	}
}
