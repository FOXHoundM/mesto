//POPUP ADD BUTTON
const popupAdd = document.querySelector('.popup_add');
const addClose = popupAdd.querySelector('.popup__close');
const addOpen = document.querySelector('.profile__add-button');

const togglePopup = function (popup) {
	popup.classList.toggle('popup_opened');
};

addOpen.addEventListener('click', function () {
	togglePopup(popupAdd);
});

addClose.addEventListener('click', function () {
	togglePopup(popupAdd);
});

// Денамические карточки.
const initialCards = [

	{
			name: 'Архыз',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
			name: 'Челябинская область',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
			name: 'Иваново',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
			name: 'Камчатка',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
			name: 'Холмогорский район',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
			name: 'Байкал',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];




