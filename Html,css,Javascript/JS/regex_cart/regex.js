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
    const password = document.querySelector(".password").value
    const passwordRgex = /^[A-Za-z]\w{7,14}$/
    const isValidPassword = passwordRgex.test(password)
    const passwordError = document.querySelector(".passworError")

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
        passwordError2.style.display = "blok"
    }

})