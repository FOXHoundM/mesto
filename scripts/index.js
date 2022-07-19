//POPUPS
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');

const editClose = popupEdit.querySelector('.popup__close');
const addClose = popupAdd.querySelector('.popup__close');
const imageClose = popupImage.querySelector('.popup__close');

const editOpen = document.querySelector('.profile__edit-button');
const addOpen = document.querySelector('.profile__add-button');


const popupForm = popupEdit.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const popupName = document.querySelector('.profile__title');
const professionInput = document.querySelector('.popup__input_type_prof');
const popupProf = document.querySelector('.profile__subtitle');
const imageSubtitle = document.querySelector('.popup__subtitle');
const formAdd = popupAdd.querySelector('.popup__form');
const cardInputName = document.querySelector('.popup__input_type_title');
const cardInputLink = document.querySelector('.popup__input_type_link');

const template = document.querySelector('.template');

const elements = document.querySelector('.elements');
const elementsItem = elements.querySelector('.elements__item');


const togglePopup = function (popup) {
	popup.classList.toggle('popup_opened');
};

function submitForm(evt) {
	evt.preventDefault();
	popupName.textContent = nameInput.value;
	popupProf.textContent = professionInput.value;
	togglePopup(popupEdit);
}

function createInitialCards() {
	const initialCards = [
		{
			name: 'Архыз',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
		},
		{
			name: 'Челябинская область',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
		},
		{
			name: 'Иваново',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
		},
		{
			name: 'Камчатка',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
		},
		{
			name: 'Холмогорский район',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
		},
		{
			name: 'Байкал',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
		},
	];

	initialCards.forEach(createCard);
}

function createCard(card) {
	const template = document
		.querySelector('.template')
		.content.querySelector('.cards')
		.cloneNode(true);

	template.querySelector('.cards__title').textContent = card.name;
	template.querySelector('.cards__image').alt = card.name;
	template.querySelector('.cards__image').src = card.link;

	template
		.querySelector('.cards__delete')
		.addEventListener('click', handleDelete);

	template.querySelector('.cards__like').addEventListener('click', handleLike);

	elementsItem.prepend(template);

	const imageOpen = template.querySelector('.cards__image');

	imageOpen.addEventListener('click', function () {
		togglePopup(popupImage);
		popupImage.querySelector('.popup__subtitle').textContent = card.name;
		popupImage.querySelector('.popup__image').alt = card.name;
		popupImage.querySelector('.popup__image').src = card.link;
	})
}



function handleLike(event) {
	const card = event.target;
	card.classList.toggle('cards__like_active');
}

function handleDelete(event) {
	const card = event.target.parentNode;
	card.remove();
}

function addEventListeners() {
	formAdd.addEventListener('submit', function (event) {
		event.preventDefault();

		const newCard = {
			name: cardInputName.value,
			link: cardInputLink.value,
		};

		createCard(newCard);
		togglePopup(popupAdd);



	});
}

editOpen.addEventListener('click', function () {
	togglePopup(popupEdit);
	nameInput.value = popupName.textContent;
	professionInput.value = popupProf.textContent;
});

addOpen.addEventListener('click', function () {
	togglePopup(popupAdd);
});

editClose.addEventListener('click', function () {
	togglePopup(popupEdit);
});

addClose.addEventListener('click', function () {
	togglePopup(popupAdd);
});



imageClose.addEventListener('click', function () {
	togglePopup(popupImage);
});

popupForm.addEventListener('submit', submitForm);





addEventListeners();
createInitialCards();
