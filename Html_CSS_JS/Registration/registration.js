const form = document.getElementById('form');
const password1El = document.getElementById('password');
const password2El = document.getElementById('confirm_password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
        return;
    }
    if (isValid && passwordMatch) {
        message.textContent = "Successfully registered!!";
        message.style.color = "green";
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        surname: form.surname.value,
        email: form.email.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate form using constraint validation
    validateForm();
    // Submit data if valid
    if (isValid && passwordMatch) {
        storeFormData();
    }
}

form.addEventListener('submit', processFormData);