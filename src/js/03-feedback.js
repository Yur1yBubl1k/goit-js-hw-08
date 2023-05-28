
const throttle = require('lodash.throttle');

const formInput = document.querySelector('form');
const inputEmail = document.querySelector('input');
const textarea = document.querySelector('textarea');


const qwerty = (event) => {
    event.preventDefault();
    const {
        elements: { email, message }
      } = event.currentTarget;

      console.log( {
        email: email.value,
        message: message.value,
    })
    updateLocalStorage();}
    

const updateLocalStorage = throttle(() => {
    const feedbackFormState = {
      email: inputEmail.value,
      message: textarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
  }, 500);

formInput.addEventListener('input', qwerty);

const getItem = localStorage.getItem("feedback-form-state");
const parsedItem = JSON.parse(getItem);
if(parsedItem !== null) {
inputEmail.value = parsedItem.email;
textarea.value = parsedItem.message;
}

function onFormElSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    formInput.reset();
    localStorage.removeItem('feedback-form-state');
};

formInput.addEventListener('submit', onFormElSubmit);











