const section = document.querySelector('.elements');
const cardsContainer = section.querySelector('.elements__item');

const container = document
	.querySelector('.template')
	.content.querySelector('.cards');

class Card {
	constructor(name, link) {
		this._name = name;
		this._link = link;
		// this._templateSelector = templateSelector;
	}

	_getTemplate() {
		return container.cloneNode(true);
	}

	generateCard() {
		this._element = this._getTemplate();

		this._element.querySelector('.cards__title').textContent = this._name;
		this._element.querySelector('.cards__image').alt = this._name;
		this._element.querySelector('.cards__image').src = this._link;

		return this._element;
	}
}

initialCards.forEach((item) => {
	const card = new Card(item.name, item.link);
	const cardElement = card.generateCard();

	cardsContainer.prepend(cardElement);
});
