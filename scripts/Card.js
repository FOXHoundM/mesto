const section = document.querySelector('.elements');
const cardsContainer = section.querySelector('.elements__item');

const popupElementImage = document.querySelector('.popup_image');
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupCloseImage = document.querySelector('.popup__close_image');


const container = document
	.querySelector('.template')
	.content.querySelector('.cards');


const closeOnEscape = (evt) => {
	if (evt.key === 'Escape') {
		const activePopup = document.querySelector('.popup_opened');
		closePopup(activePopup);
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

class Card {
	constructor(name, link) {
		this._name = name;
		this._link = link;
	}

	_getTemplate() {
		return container.cloneNode(true);
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

		cardImage.addEventListener('click', () => {
			openPopup(popupElementImage)
			popupSubtitle.textContent = this._name;
			popupImage.alt = this._name;
			popupImage.src = this._link;
		})

		popupCloseImage.addEventListener('click', () => {
			closePopup(popupElementImage)
		})

		return this._element;
	}

	_handleLike(event){
		const buttonLike = event.target;
		buttonLike.classList.toggle('cards__like_active');
	}

	_handleDelete(event) {
		const card = event.target.closest('.cards');
		card.remove();
	}

}

initialCards.forEach((item) => {
	const card = new Card(item.name, item.link);
	const cardElement = card.generateCard();

	cardsContainer.prepend(cardElement);
});
