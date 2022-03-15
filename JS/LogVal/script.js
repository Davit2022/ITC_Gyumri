const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {

    const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const psw=  /^[A-Za-z]\w{6,10}$/;
    const isValidPsw = psw.test(passwordValue)

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last Name is required');
    } else {
        setSuccess(lastname);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ){
        setError(password, 'Password must be at least 8 character.');
    }else if(!isValidPsw){
        setError(password, 'Only characters, numbers, \'_\', first character-letter, 6-10 symbols');
    }else{
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
}
// window.document.addEventListener('DOMContentLoaded', validateInputs);
// window.document.addEventListener('DOMContentLoaded', setError);
// window.document.addEventListener('DOMContentLoaded', setSuccess);
