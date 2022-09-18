export class Card {
	constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._userId = data.userId;
		this._id = data.id;
		this._ownerId = data._ownerId;

		this._templateSelector = templateSelector;
		this._handleCardClick = handleCardClick;
		this._handleDeleteClick = handleDeleteClick;
		this._handleLikeClick = handleLikeClick;
	}

	_getCard() {
		return document.querySelector(this._templateSelector).content.querySelector('.cards').cloneNode(true)
	}

	generateCard() {
		this._element = this._getCard();

		this._deleteButton = this._element.querySelector('.cards__delete');
		this._likeButton = this._element.querySelector('.cards__like');
		this._likesCount = this._element.querySelector('.cards__like_count')
		this._image = this._element.querySelector('.cards__image');
		this._title = this._element.querySelector('.cards__title');

		this._title.textContent = this._name;
		this._image.alt = this._name;
		this._image.src = this._link;

		this.setLikes(this._likes)


		// if (this._ownerId !== this._userId) {
		// 	this._deleteButton.style.display = 'none'
		// }


		this._setEventListeners()

		return this._element;
	}

	_addLike() {
		this._likeButton.classList.add('cards__like_active');
	}

	_removeLike() {
		this._likeButton.classList.remove('cards__like_active');
	}

	deleteCard() {
		this._element.remove();

		this._element = null;
	}

	_setEventListeners() {
		this._image.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link)
		});

		this._likeButton.addEventListener('click', () => {
			this._handleLikeClick(this._id)
		});

		this._deleteButton.addEventListener('click', () => {
			this._handleDeleteClick(this._id)
		});

	}

	isLiked() {
		return this._likes.find(user => user._id === this._userId)

	}

	setLikes(newLikes) {
		this._likes = newLikes
		this._likesCount.textContent = this._likes.length


		if (this.isLiked()) {
			this._addLike()
		} else {
			this._removeLike()
		}
	}


}

