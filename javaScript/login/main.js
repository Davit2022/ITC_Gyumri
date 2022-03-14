const btn = document.querySelector(".btn")
const show = document.querySelector(".open")


show.addEventListener("click",()=>{
   const window = document.querySelector(".window")
        if (window.style.display === "none") {
            window.style.display = "block";
        } else {
             window.style.display = "none";
        }
})

btn.addEventListener("click",()=>{
     const name = document.querySelector(".name").value
     const nameRgex = /^[a-zA-Z]*$/
     const isValidName = nameRgex.test(name)
   
      if(isValidName == false){
         console.log("Please enter a valid name")
      }else{
         console.log("ok")
      }
     const email = document.querySelector(".email").value
     const emailRgex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     const isValidEmail = emailRgex.test(email)

      if(isValidEmail == false){
         console.log("Please enter a valid email")
      }else{
         console.log("ok")
   }
     const password = document.querySelector(".password").value
     const passwordRgex = /^[A-Za-z]\w{7,14}$/
     const isValidPassword = passwordRgex.test(password)

      if(isValidPassword == false){
         console.log("Please enter a valid password")
      }else{
         console.log("ok")
       }
      const pass2 = document.querySelector("#pass2").value
      if(pass2 === password){
         console.log("ok")
      }else{
         console.log("Please enter a valid password")
       }
        
})