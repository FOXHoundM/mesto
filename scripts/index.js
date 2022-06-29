const popup = document.querySelector(".popup");

const popupClose = document.querySelector(".popup__close");

const editButton = document.querySelector(".profile__edit-button");

const popupForm = document.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input_type_name");

const popupName = document.querySelector(".profile__title");

const professionInput = document.querySelector(".popup__input_type_prof");

const popupProf = document.querySelector(".profile__subtitle");

//const addButton = document.querySelector(".profile__add-button");

//const popupSave = document.querySelector(".popup__save-button");

function openPopup() {
	popup.classList.add("popup_opened");
	nameInput.value = popupName.textContent;
	professionInput.value = popupProf.textContent;
}
function closePopup() {
	popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

function submitForm(event) {
	event.preventDefault();
	popupName.textContent = nameInput.value;
  popupProf.textContent = professionInput.value;
  closePopup();
}

popupForm.addEventListener("submit", submitForm)