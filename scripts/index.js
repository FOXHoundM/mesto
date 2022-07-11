//POPUPS
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');

//POPUPS CLOSE BUTTONS
const editClose = popupEdit.querySelector('.popup__close');
const addClose = popupAdd.querySelector('.popup__close');

//POPUPS OPEN BUTTONS
const editOpen = document.querySelector('.profile__edit-button');
const addOpen = document.querySelector('.profile__add-button');

//POPUP EDIT FORM
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const popupName = document.querySelector('.profile__title');
const professionInput = document.querySelector('.popup__input_type_prof');
const popupProf = document.querySelector('.profile__subtitle');

//POPUPS SAVE BUTTONS
const saveButton = document.querySelector('.popup__save-button');

//FUNCTIONS
const togglePopup = function (popup) {
	popup.classList.toggle('popup_opened');
};

function submitForm(evt) {
	evt.preventDefault();
	popupName.textContent = nameInput.value;
	popupProf.textContent = professionInput.value;
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

popupForm.addEventListener('submit', function () {
	togglePopup(popupEdit);
});

popupForm.addEventListener('submit', submitForm);


