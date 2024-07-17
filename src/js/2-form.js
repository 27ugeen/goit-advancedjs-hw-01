'use strict';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', () => {
  const { email, message } = form.elements;
  formData.email = email.value.trim();
  formData.message = message.value.trim();
  saveFormData();
});

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const { email, message } = JSON.parse(savedData);
      form.elements.email.value = email;
      form.elements.message.value = message;
      formData.email = email;
      formData.message = message;
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const { email, message } = formData;
  if (!email || !message) {
    alert('Please fill all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});
