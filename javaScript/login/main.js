let btn = document.querySelector(".btn")
let show = document.querySelector(".open")

show.addEventListener("click",()=>{
   let window = document.querySelector(".window")
        if (window.style.display === "none") {
            window.style.display = "block";
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