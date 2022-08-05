const formNew = {
   form: '.popup__form_add[name="add_photo"]',
   button: '.popup__save-button',
   buttonInvalid: 'popup__save-button_invalid',
};

const formEdit = {
   form: '.popup__form_edit[name="editProfile"]',
   button: '.popup__save-button',
   buttonInvalid: 'popup__save-button_invalid',
};

function enableValidation(selectors) {
   // 1. Найти форму в документе
   const form = document.querySelector(selectors.form)
   // 2. Установить слушателей submit
   form.addEventListener('submit', handleFormSubmit);
   form.addEventListener('input', (event) => handleFormInput(event, selectors));
}

function handleFormSubmit(event) {
   event.preventDefault();
   // 1 Определить валидность формы
   const form = event.currentTarget;
   const isValid = form.checkValidity();
   // 2 Вывести alert
   if (isValid) {
      //3 Если валидна, то сбросим ее
      form.reset();
   } else {
   }
}

function handleFormInput(event, selectors) {
   const input = event.target;
   const form = event.currentTarget;

   //1 Установить custom текст ошибки
   setCustomError(input);
   //2 Показать ошибки под полем
   showFieldError(input);
   //3 Включить и отключить отправку формы
   setSubmitButtonState(form, selectors);
}

function setCustomError(input) {
   const validity = input.validity;
   input.setCustomValidity('');

   if (validity.valueMissing) {
      input.setCustomValidity('Вы пропустили это поле')
   }

   if (validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity('Введите адрес сайта')
   }
   if(validity.valid){
      input.classList.remove('popup__input_invalid')
   }
   else{
      input.classList.add('popup__input_invalid')
   }
}

function showFieldError(input) {
   const span = input.nextElementSibling;
   span.textContent = input.validationMessage;
}


function setSubmitButtonState(form, selectors) {
   const button = form.querySelector(selectors.button);
   const isValid = form.checkValidity();

   if (isValid) {
      button.removeAttribute('disabled');
      button.classList.remove(selectors.buttonInvalid);
   } else {
      button.setAttribute('disabled', true);
      button.classList.add(selectors.buttonInvalid);
   }
}

enableValidation(formNew);
enableValidation(formEdit);
