const App = () => {
    const log = document.querySelector(".login")
    const btn = document.querySelector(".sbm-btn")

    const handleOnClickFormIcon = () => {
        const mainDiv = document.querySelector(".main")
        if (mainDiv.style.display.includes("none")) {
            mainDiv.style.display = "block";
            log.style.display = "none";
            return
        }
        mainDiv.style.display = "none";

    }

    const handleOnClickForm = () => {
        const name = document.querySelector(".name").value;
        const email = document.querySelector(".email").value;
        const password = document.querySelector(".password").value;

        console.log(name)
        console.log(email)
        console.log(password)
    }

    log.addEventListener("click", handleOnClickFormIcon)
    btn.addEventListener("click", handleOnClickForm)
}

window.document.addEventListener('DOMContentLoaded', App)