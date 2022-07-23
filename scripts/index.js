const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');

const popupEditClose = document.querySelector('.popup__close_edit');
const popupAddClose = document.querySelector('.popup__close_add');
const popupImageClose = document.querySelector('.popup__close_image');

const popupEditOpen = document.querySelector('.profile__edit-button');
const popupAddOpen = document.querySelector('.profile__add-button');

const popupForm = document.querySelector('.popup__form_edit');
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



const openPopup = function (popup) {
	popup.classList.add('popup_opened')
}

const closePopup = function (popup) {
	popup.classList.remove('popup_opened')
}

// const createCard = (data) => {
// 	const cardElement = container.cloneNode(true);
//
// 	const cardImage = cardElement.querySelector('.cards__image');
// 	const cardTitle = cardElement.querySelector('.cards__title');
//
// 	cardTitle.textContent = data.name;
// 	cardImage.alt = data.name;
// 	cardImage.src = data.link;
//
//
// 	const cardDelete = cardElement.querySelector('.cards__delete');
// 	const cardLike = cardElement.querySelector('.cards__like');
//
// 	cardDelete.addEventListener('click', handleDelete);
// 	cardLike.addEventListener('click', handleLike);
//
// 	cardImage.addEventListener('click', function () {
// 		openPopup(popupImage);
//
// 		const popupSubtitle = popupImage.querySelector('.popup__subtitle');
// 		const popupImageSize = popupImage.querySelector('.popup__image');
//
// 		popupSubtitle.textContent = data.name;
// 		popupImageSize.alt = data.name;
// 		popupImageSize.src = data.link;
// 	});
//
// 	return cardElement;
// }
//
// const renderCard = (data, cardsContainer) => {
// 	const cardElement = createCard(data);
//
// 	cardsContainer.prepend(cardElement);
// }

// formAdd.addEventListener('submit', function (event) {
// 	event.preventDefault();
//
// 	const data = {
// 		name: cardInputName.value,
// 		link: cardInputLink.value
// 	}
// 	renderCard(data);
//
// 	closePopup(popupAdd);
// });




function submitForm(evt) {
	evt.preventDefault();
	popupName.textContent = nameInput.value;
	popupProf.textContent = professionInput.value;
	closePopup(popupEdit);
}



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
	cardLike.addEventListener('click', handleLike);

	cardImage.addEventListener('click', function () {
		openPopup(popupImage);

		const popupSubtitle = popupImage.querySelector('.popup__subtitle');
		const popupImageSize = popupImage.querySelector('.popup__image');

		popupSubtitle.textContent = card.name;
		popupImageSize.alt = card.name;
		popupImageSize.src = card.link;
	});

	// cardsContainer.prepend(template);
	return template;
}

function handleLike(event) {
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

		createCard(card);

		closePopup(popupAdd);
		cardsContainer.prepend(createCard(card));

	});



popupEditOpen.addEventListener('click', function () {
	openPopup(popupEdit);
	nameInput.value = popupName.textContent;
	professionInput.value = popupProf.textContent;
});

popupAddOpen.addEventListener('click', function () {
	openPopup(popupAdd);
	formAdd.reset()
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



popupForm.addEventListener('submit', submitForm);



