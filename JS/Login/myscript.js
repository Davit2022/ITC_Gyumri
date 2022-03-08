let log = document.querySelector(".login")
let btn = document.querySelector(".sbm-btn")

log.addEventListener("click",()=>{
   let window = document.querySelector(".main")
        if (window.style.display === "none") {
            window.style.display = "block";
            log.style.display = "none"
        } else {
             window.style.display = "none";
        }
})

btn.addEventListener("click",()=>{
     let name = document.querySelector(".name").value;
        console.log(name)
     let email = document.querySelector(".email").value;
         console.log(email)
     let password = document.querySelector(".password").value;
         console.log(password)
})