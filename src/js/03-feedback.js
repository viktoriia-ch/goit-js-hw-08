// IMPORT
// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const KEY_STORAGE = 'feedback-form-state';

// FUNCTIONS

const onFormInput = evt => {
  const { email, message } = evt.currentTarget.elements;
  const objData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(KEY_STORAGE, JSON.stringify(objData));
};

const onFormSubmit = evt => {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  const objData = {
    email: email.value,
    message: message.value,
  };

  console.log(objData);
  localStorage.removeItem(KEY_STORAGE);
  form.reset();
};

const getObjData = () => {
  const savedData = localStorage.getItem(KEY_STORAGE);
  const parseData = JSON.parse(savedData);

  if (parseData) {
    form.email.value = parseData.email;
    form.message.value = parseData.message;
  }
};

getObjData();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
