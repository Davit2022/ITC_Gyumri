
const btn = document.querySelector(".submit")
const show = document.querySelector(".open")

show.addEventListener("click", () => {
    const window = document.querySelector(".container")
    if (window.style.display === "none") {
        window.style.display = "block";
    } else {
        window.style.display = "none";
    }
    if (window.style.display === "block") {
        show.style.display = "none"
    }
})

btn.addEventListener("click", () => {


    const name = document.querySelector(".name").value
    const nameRgex = /^[a-zA-Z]*$/
    const isValidName = nameRgex.test(name)
    const nameError = document.querySelector(".nameError")

    if (isValidName == false || name === "") {
        nameError.style.display = "block"
    } else {
        nameError.style.display = "none"
    }
    const email = document.querySelector(".email").value
    const emailRgex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isValidEmail = emailRgex.test(email)
    const emailError = document.querySelector(".emailError")

    if (isValidEmail == false) {
        emailError.style.display = "block"
    } else {
        emailError.style.display = "none"
    }

    const number = document.querySelector(".password").value
    const numberError = document.querySelector(".numberError")

    if(number != 8){
        numberError.style.display = "block"
    }else {
            numberError.style.display = "none"
    }

    const password = document.querySelector(".password").value
    const passwordRgex = /^[A-Za-z]/
    const isValidPassword = passwordRgex.test(password)
    const passwordError = document.querySelector(".passwordError")

    if (isValidPassword == false) {
        passwordError.style.display = "block"
    } else {
        passwordError.style.display = "none"
    }
    const pass2 = document.querySelector("#pass2").value
    const passwordError2 = document.querySelector(".passwordError2")
    if (pass2 === password) {
        passwordError2.style.display = "none"
    } else {
        passwordError2.style.display = "block"
    }

})
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
   loginForm.style.marginLeft = "-50%";
   loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
   loginForm.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
   signupBtn.click();
   return false;
});
