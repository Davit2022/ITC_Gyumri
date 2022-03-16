const btn = document.querySelector(".btn")
const show = document.querySelector(".open")


const EVENTS_TYPES = {
   CLICK : 'click',
}

show.addEventListener(EVENTS_TYPES.CLICK,()=>{
   const window = document.querySelector(".window")
        if (window.style.display === "none") {
            window.style.display = "block";
        } else {
             window.style.display = "none";
        }
})

btn.addEventListener(EVENTS_TYPES.CLICK,()=>{
   
     
     const name = document.querySelector(".name").value
     const nameRgex = /^[a-zA-Z]*$/
     const isValidName = nameRgex.test(name)
     const nameError = document.querySelector(".nameError")
      nameError.style.display = isValidName == false || name === "" ? 'block' : 'none'
     //  const setName = localStorage.setItem(name, name);
     const getName = localStorage.getItem(name)
     
     const path = document.querySelector(".btn")
    
          if (getName === name && name !="") {
               path.setAttribute("href","file:///home/khachik/gitHub/ITC_Gyumri/javaScript/login/table.html") 
             
          }else{
               path.setAttribute("href","#")
          }

     const email = document.querySelector(".email").value
     const emailRgex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     const isValidEmail = emailRgex.test(email)
     const emailError = document.querySelector(".emailError")
      emailError.style.display = isValidEmail == false ? 'block' : 'none'
     
     const password = document.querySelector(".password").value
     const passwordRgex = /^[A-Za-z]\w{7,14}$/
     const isValidPassword = passwordRgex.test(password)
     const passwordError = document.querySelector(".passworError")
       passwordError.style.display = isValidPassword == false ? 'block' : 'none'
     
      const pass2 = document.querySelector("#pass2").value
      const passwordError2=document.querySelector(".passwordError2")
       passwordError2.style.display = pass2 === password ? 'none' : 'block' 
})