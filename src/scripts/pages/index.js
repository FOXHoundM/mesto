import '../../pages/index.css';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
	cardInputLink,
	cardInputName,
	cardsContainer,
	formAdd,
	initialCards,
	nameInput,
	popupAdd,
	popupAddOpen,
	popupEdit,
	popupEditOpen,
	popupImage,
	popupName,
	popupProf,
	professionInput,
	validationConfig,
} from '../utils/constants.js';

const defaultCardList = new Section(
	{
		items: initialCards,
		renderer: (item) => {
			const card = new Card(item.name, item.link, () => {
				handleOpenPopup(item.name, item.link);
			});
			const cardElement = card.generateCard();
			defaultCardList.addItem(cardElement);
		},
	},
	cardsContainer
);

const imageViewPopup = new PopupWithImage(popupImage);
const handleOpenPopup = (name, link) => imageViewPopup.open(name, link);

const editProfilePopup = new PopupWithForm(popupEdit, (username, job) => {
	userInfo.setUserInfo({
		username: nameInput.value,
		job: professionInput.value,
	});

	editProfilePopup.close();
	editFormValidator.disabledButton();
});

const addCardPopup = new PopupWithForm(popupAdd, () => {
	const newCard = new Section(
		{
			items: [
				{
					name: cardInputName.value,
					link: cardInputLink.value,
				},
			],
			renderer: (item) => {
				const newCard = new Card(item.name, item.link, () => {
					handleOpenPopup(item.name, item.link);
				});
				const newCardElement = newCard.generateCard();
				defaultCardList.addItem(newCardElement);
			},
		},
		cardsContainer
	);
	newCard.renderItems();
	addCardPopup.close();

	addFormValidator.disabledButton();
});

const userInfo = new UserInfo({
	username: popupName,
	job: popupProf,
});

const editFormValidator = new FormValidator(validationConfig, popupEdit);
const addFormValidator = new FormValidator(validationConfig, popupAdd);

function profileEditInputs({ username, job }) {
	nameInput.value = username;
	professionInput.value = job;
}

popupEditOpen.addEventListener('click', function () {
	const info = userInfo.getUserInfo();
	profileEditInputs({
		username: info.username,
		job: info.job,
	});

	editProfilePopup.open();
});

popupAddOpen.addEventListener('click', function () {
	addCardPopup.open();
	formAdd.reset();
});

editFormValidator.enableValidation();
addFormValidator.enableValidation();
defaultCardList.renderItems();
imageViewPopup.setEventListeners();
addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
