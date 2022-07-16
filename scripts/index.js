//POPUPS
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');

const editClose = popupEdit.querySelector('.popup__close');
const addClose = popupAdd.querySelector('.popup__close');
const imageClose = popupImage.querySelector('.popup__close');

const editOpen = document.querySelector('.profile__edit-button');
const addOpen = document.querySelector('.profile__add-button');
const imageOpen = document.querySelector('.cards__image');

const imageSize = document.querySelector('.popup__image');
const imageSubtitle = document.querySelector('.popup__subtitle');

const popupForm = popupEdit.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const popupName = document.querySelector('.profile__title');
const professionInput = document.querySelector('.popup__input_type_prof');
const popupProf = document.querySelector('.profile__subtitle');

//FUNCTIONS
const togglePopup = function (popup) {
	popup.classList.toggle('popup_opened');
};

function submitForm(evt) {
	evt.preventDefault();
	popupName.textContent = nameInput.value;
	popupProf.textContent = professionInput.value;
	togglePopup(popupEdit);
}

//ADDEVENTLISTENERS
editOpen.addEventListener('click', function () {
	togglePopup(popupEdit);
	nameInput.value = popupName.textContent;
	professionInput.value = popupProf.textContent;
});

addOpen.addEventListener('click', function () {
	togglePopup(popupAdd);
});

//imageOpen.addEventListener('click', function () {
//	togglePopup(popupImage);
//});

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

const formAdd = popupAdd.querySelector('.popup__form');
const cardInputName = document.querySelector('.popup__input_type_title');
const cardInputLink = document.querySelector('.popup__input_type_link');

const cardDelete = document.querySelector('.cards__delete');
const cardLike = document.querySelector('.cards__like');

const elementsItem = document.querySelector('.elements__item');

function createCard(name, link) {
	const template = document
		.querySelector('.template')
		.content.querySelector('.cards')
		.cloneNode(true);


	template.querySelector('.cards__title').textContent = name.name;
	template.querySelector('.cards__title').alt = name.name;
	template.querySelector('.cards__image').src = link;

	elementsItem.prepend(template);
}

function addEventListeners() {
	formAdd.addEventListener('submit', function (event) {
		event.preventDefault();

		createCard(cardInputName.value, cardInputLink.value);

		togglePopup(popupAdd);
	});
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

addEventListeners();
createInitialCards();
