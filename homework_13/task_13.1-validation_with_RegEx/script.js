let form = document.querySelector('form');
let inputName = document.querySelector('input#name');
let inputMessage = document.querySelector('input#message');
let inputPhone = document.querySelector('input#phone');
let inputEmail = document.querySelector('input#email');
let isFormValid = false;


const regexMail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const regexPhoneUA = /^((?:\+?3)?8)?[\s\-\(]*?(0\d{0})/;


function addErrorMessage(element, message) {
    let msgEl = element.nextElementSibling;
    msgEl.classList.add('error_msg');
    msgEl.classList.remove('true_msg');
    msgEl.textContent = message;
}

function addTrueMessage(element, message) {    
    let msgEl = element.nextElementSibling;
    msgEl.classList.remove('error_msg');
    msgEl.classList.add('true_msg');
    msgEl.textContent = message;
}

function validationName(name) {
    if(name.value === '') {
        name.classList.add('not_valid');
        isFormValid = false;
        addErrorMessage(name, 'Enter the name');
    } else {
        name.classList.remove('not_valid');
        isFormValid = true;
        addTrueMessage(name);
    }
}

function validationMessage(message) {
    if(message.value === '' || message.value.length < 5) {
        message.classList.add('not_valid');
        isFormValid = false;
        addErrorMessage(message, 'Enter a message longer than 5 characters');
    } else {
        message.classList.remove('not_valid');
        isFormValid = true;
        addTrueMessage(message);
    }
}

function validationPhone(phone, regex) {
    if (phone.value === "") {
        phone.classList.add('not_valid');
        isFormValid = false;
        addErrorMessage(phone, "Phone is required");
    } else if (!regex.test(phone.value)) {
        phone.classList.add('not_valid');
        isFormValid = false;
        addErrorMessage(phone, "Phone is incorrect");
    } else {
        phone.classList.remove('not_valid');
        isFormValid = true;
        addTrueMessage(phone);
    }
}

function validationEmail(email) {
    if (email.value === "") {
        email.classList.add('not_valid');
        isFormValid = false;
        addErrorMessage(email, "Email is required");
    } else if (!regexMail.test(email.value)) {
        email.classList.add('not_valid');
        isFormValid = false;
        addErrorMessage(email, "Email is incorrect");
    } else {
        email.classList.remove('not_valid');
        isFormValid = true;
        addTrueMessage(email);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validationName(inputName);

    validationMessage(inputMessage);

    validationPhone(inputPhone, regexPhoneUA);

    validationEmail(inputEmail);

    if(isFormValid) {
        console.log(inputName.value.trim());
        console.log(inputMessage.value.trim());
        console.log(inputPhone.value.trim());
        console.log(inputEmail.value.trim());
    }
});

inputName.addEventListener('input', function(event) {
    if(event.target.value !== '' && event.target.value.length > 1) {
        inputName.classList.remove('not_valid');
        addTrueMessage(inputName, 'Its ok!');
    } else {
        addErrorMessage(inputName, 'Enter the name');
    }
});

inputMessage.addEventListener('input', function(event) {
    if(event.target.value !== '' && event.target.value.length >= 5) {
        inputMessage.classList.remove('not_valid');
        addTrueMessage(inputMessage, 'Its ok!');
    } else if(event.target.value.length <= 5) {
        addErrorMessage(inputMessage, 'Enter a message longer than 5 characters');
    }
});

inputPhone.addEventListener('input', function() {
    if(regexPhoneUA.test(inputPhone.value)) {
        inputPhone.classList.remove('not_valid');
        addTrueMessage(inputPhone, 'Its ok!');
    } else {
        addErrorMessage(inputPhone, 'The number must begin with +380');
    }
});

inputEmail.addEventListener('input', function() {
    if(regexMail.test(inputEmail.value)) {
        inputEmail.classList.remove('not_valid');
        addTrueMessage(inputEmail, 'Its ok!');
    } else {
        addErrorMessage(inputEmail, 'Enter a valid email');
    }
});