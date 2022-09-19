export class Card {
	constructor({data, templateSelector, handleCardClick, handleDeleteClick, handleSetLike, handleRemoveLike}) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._id = data.id;
		this._userId = data.userId;
		this._ownerId = data.ownerId;


		this._templateSelector = templateSelector;
		this._handleCardClick = handleCardClick;
		this._handleDeleteClick = handleDeleteClick;
		this._handleSetLike = handleSetLike;
		this._handleRemoveLike = handleRemoveLike;
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
		this._likesCount.textContent = this._likes.length

		this._isLiked()

		if (this._userId !== this._ownerId) {
			this._deleteButton.addEventListener('click', () => {
				this._handleDeleteClick(this._id)
			})
		} else {
			this._deleteButton.remove()
		}

		this._setEventListeners()

		return this._element;
	}

	deleteCard() {
		this._element.remove();
		this._element = null
	}

	_setEventListeners() {
		this._image.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link)
		});

		this._likeButton.addEventListener('click', () => {
			if (this._likeButton.classList.contains('cards__like_active')) {
				this._handleRemoveLike(this._id)
			} else {
				this._handleSetLike(this._id)
			}
		});

		this._deleteButton.addEventListener('click', () => {
			this._handleDeleteClick(this._id)
		});
	}

	_isLiked() {
		if (this._likes.some((user) => {
			return this._userId === user._id
		})) {
			this._likeButton.classList.add('cards__like_active')
		}
	}

	handleLikeCard(data) {
		this._likes = data.likes
		this._likesCount.textContent = this._likes.length
		this._likeButton.classList.toggle('cards__like_active')
	}

}

