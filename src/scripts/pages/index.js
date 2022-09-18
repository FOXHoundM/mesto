import '../../pages/index.css';

import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {
	avatarImage,
	cardsContainer, // initialCards,
	nameInput,
	popupAdd,
	popupAddOpen,
	popupAvatar,
	popupDelete,
	popupEdit,
	popupEditOpen,
	popupImage,
	professionInput,
	profileAbout,
	profileName,
	validationConfig,
} from '../utils/constants.js';
import {Api} from "../components/Api.js";
import {PopupWithSubmitForm} from "../components/PopupWithSubmitForm.js";

const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-50', headers: {
		authorization: '1d5fb42f-083e-4754-bc11-0941caf4871f', 'Content-type': 'application/json'
	}
})

const editFormValidator = new FormValidator(validationConfig, popupEdit);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, popupAdd);
addFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, popupAvatar)
avatarFormValidator.enableValidation()

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
	.then(([initialCards, res]) => {
		userInfo.setUserInfo(res);
		userId = res._id;
		initialCards.reverse()
		section.renderItems(initialCards)

		console.log(initialCards)
		console.log(res)
	})
	.catch((err) => {
		console.log(`Ошибка: ${err}`)
	})


const createCard = (data) => {
	const card = new Card(
		data,
		'.template',
		(name, link) => {
			imageViewPopup.open(name, link)
		},
		(cardId) => {
			console.log(cardId)
			deleteCardPopup.open();
			deleteCardPopup.changeSubmitHandler(() => {
				api.deleteCard(cardId)
					.then(() => {
						card.deleteCard()
						deleteCardPopup.close()
					})
					.catch((err) => {
						console.log(`Ошибка: ${err}`)
					})
			})
		},
		(cardId) => {
			if (card.isLiked()) {
				api.deleteLike(cardId)
					.then(res => {
						card.setLikes(res.likes)
					})

			} else {
				api.addLike(cardId)
					.then(res => {
						card.setLikes(res.likes)
					})
			}

		},
	)
	return card.generateCard()
}

const section = new Section({
	renderer: (data) => {
		section.addItem((createCard({
			name: data.name,
			link: data.link,
			likes: data.likes,
			id: data._id,
			userId: userId,
			ownerId: data._ownerId
		})))
	}
}, cardsContainer);

// const section = new Section({
// 	renderer: (item) => {
// 		const cardElement = createCard(item);
// 		section.addItem(cardElement)
// 	},
// }, cardsContainer);

const addCardPopup = new PopupWithForm(popupAdd, (item) => {
	addCardPopup.loading(true);
	api.addCard((item))
		.then(res => {
			const card = createCard({
				name: res.name,
				link: res.link,
				likes: res.likes,
				id: res._id,
				userId: userId,
				ownerId: res._ownerId
			})
			section.addItem(card)
			addCardPopup.close()
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`)
		})
		.finally(() => {
			editProfilePopup.loading(false)
		})

});
addCardPopup.setEventListeners();


const editProfilePopup = new PopupWithForm(popupEdit, (dataForm) => {
	editProfilePopup.loading(true);
	api.editUserInfo(dataForm)
		.then((dataForm) => {
			userInfo.setUserInfo(dataForm)
			editProfilePopup.close();
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`)
		})
		.finally(() => {
			editProfilePopup.loading(false)
		})

	editFormValidator.disableSubmitButton();
});

editProfilePopup.setEventListeners();

popupAddOpen.addEventListener('click', function () {
	addCardPopup.open();
});


const editAvatarPopup = new PopupWithForm(popupAvatar, (data) => {
	editAvatarPopup.loading(true);
	api.changeAvatar(data)
		.then((data) => {
			userInfo.setUserInfo(data)
			avatarImage.style.backgroundImage = data.avatar;
			editAvatarPopup.close()
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`)
		})
		.finally(() => {
			editAvatarPopup.loading(false)
		})
	avatarFormValidator.disableSubmitButton()
})
editAvatarPopup.setEventListeners()

const deleteCardPopup = new PopupWithSubmitForm(popupDelete)
deleteCardPopup.setEventListeners()


const imageViewPopup = new PopupWithImage(popupImage);
imageViewPopup.setEventListeners();

const userInfo = new UserInfo({
	username: profileName, job: profileAbout, avatar: avatarImage
});


popupEditOpen.addEventListener('click', function () {
	const info = userInfo.getUserInfo();
	nameInput.value = info.name;
	professionInput.value = info.about;

	editProfilePopup.open();
});


avatarImage.addEventListener('click', () => {
	editAvatarPopup.open()
	avatarFormValidator.disableSubmitButton()
})



