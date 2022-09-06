import '../../pages/index.css';

import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {
	cardsContainer,
	formAdd,
	initialCards,
	nameInput,
	popupAdd,
	popupAddOpen,
	popupEdit,
	popupEditOpen,
	popupImage,
	profileName,
	profileAbout,
	professionInput,
	validationConfig,
} from '../utils/constants.js';


const editFormValidator = new FormValidator(validationConfig, popupEdit);
const addFormValidator = new FormValidator(validationConfig, popupAdd);

const createCard = (item) => {
	const card = new Card(item.name, item.link, () => {
		handleCardClick(item.name, item.link);
	});
	const cardElement = card.generateCard();
	defaultCardList.addItem(cardElement);

	return cardElement
}

const defaultCardList = new Section(
	{
		items: initialCards,
		renderer: createCard
	},
	cardsContainer
);

const addCardPopup = new PopupWithForm(popupAdd, (item) => {
	createCard(item)
	addCardPopup.close();
	formAdd.reset();
	addFormValidator.disabledSubmitButton();
});

const imageViewPopup = new PopupWithImage(popupImage);
const handleCardClick = (name, link) => imageViewPopup.open(name, link);

const userInfo = new UserInfo({
	username: profileName,
	job: profileAbout,
});

const editProfilePopup = new PopupWithForm(popupEdit, (data) => {
	userInfo.setUserInfo({
		name: data.name,
		job: data.job
	});

	editProfilePopup.close();

	editFormValidator.disabledSubmitButton();

});


popupEditOpen.addEventListener('click', function () {
	const getInfo = userInfo.getUserInfo();
	nameInput.value = getInfo.name;
	professionInput.value = getInfo.about;

	editProfilePopup.open();
});

popupAddOpen.addEventListener('click', function () {
	addCardPopup.open();

});

editFormValidator.enableValidation();
addFormValidator.enableValidation();
defaultCardList.renderItems();
imageViewPopup.setEventListeners();
addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
