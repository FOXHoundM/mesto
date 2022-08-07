const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');

const popupEditClose = document.querySelector('.popup__close_edit');
const popupAddClose = document.querySelector('.popup__close_add');
const popupImageClose = document.querySelector('.popup__close_image');

const popupEditOpen = document.querySelector('.profile__edit-button');
const popupAddOpen = document.querySelector('.profile__add-button');

const popupFormEdit = document.querySelector('.popup__form_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const popupName = document.querySelector('.profile__title');
const professionInput = document.querySelector('.popup__input_type_prof');
const popupProf = document.querySelector('.profile__subtitle');
const formAdd = document.querySelector('.popup__form_add');
const cardInputName = document.querySelector('.popup__input_type_title');
const cardInputLink = document.querySelector('.popup__input_type_link');

const container = document
	.querySelector('.template')
	.content.querySelector('.cards');
const section = document.querySelector('.elements');
const cardsContainer = section.querySelector('.elements__item');

const popupSubtitle = popupImage.querySelector('.popup__subtitle');
const popupImageSize = popupImage.querySelector('.popup__image');

const buttonElement = document.querySelector('.popup__save-button');
const formElementList = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__save-button_invalid',
	inputErrorClass: 'popup__input_type_error',
	errorTextClass: 'popup__error',
};

const closeOnEscape = (evt) => {
	if (evt.key === 'Escape') {
		const activePopup = document.querySelector('.popup_opened');
		closePopup(activePopup);
	}
};

const closeOnOverlay = (evt) => {
	if (evt.target.classList.contains('popup_opened')) {
		closePopup(evt.target);
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

const createCard = (card) => {
	const template = container.cloneNode(true);
	const cardImage = template.querySelector('.cards__image');
	const cardTitle = template.querySelector('.cards__title');

	cardTitle.textContent = card.name;
	cardImage.alt = card.name;
	cardImage.src = card.link;

	const cardDelete = template.querySelector('.cards__delete');
	const cardLike = template.querySelector('.cards__like');

	cardDelete.addEventListener('click', handleDelete);
	cardLike.addEventListener('click', buttonLike);

	cardImage.addEventListener('click', function () {
		openPopup(popupImage);
		popupSubtitle.textContent = card.name;
		popupImageSize.alt = card.name;
		popupImageSize.src = card.link;
	});

	return template;
};

function createInitialCards() {
	initialCards.forEach(function (card) {
		cardsContainer.prepend(createCard(card));
	});
}

function submitForm(evt) {
	evt.preventDefault();

	popupName.textContent = nameInput.value;
	popupProf.textContent = professionInput.value;

	closePopup(popupEdit);
	disabledButton(buttonElement, formElementList);
}

function buttonLike(event) {
	const card = event.target;
	card.classList.toggle('cards__like_active');
}

function handleDelete(event) {
	const card = event.target.closest('.cards');
	card.remove();
}

formAdd.addEventListener('submit', function (event) {
	event.preventDefault();

	const card = {
		name: cardInputName.value,
		link: cardInputLink.value,
	};

	cardsContainer.prepend(createCard(card));

	closePopup(popupAdd);

	disabledButton(buttonElement, formElementList);
});

popupEditOpen.addEventListener('click', function () {
	openPopup(popupEdit);
	nameInput.value = popupName.textContent;
	professionInput.value = popupProf.textContent;
});

popupAddOpen.addEventListener('click', function () {
	openPopup(popupAdd);
	formAdd.reset();
});

popupEditClose.addEventListener('click', function () {
	closePopup(popupEdit);
});

popupAddClose.addEventListener('click', function () {
	closePopup(popupAdd);
});

popupImageClose.addEventListener('click', function () {
	closePopup(popupImage);
});

popupEdit.addEventListener('click', closeOnOverlay);
popupAdd.addEventListener('click', closeOnOverlay);
popupImage.addEventListener('click', closeOnOverlay);

popupFormEdit.addEventListener('submit', submitForm);

createInitialCards();
