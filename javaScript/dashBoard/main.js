const App = ()=>{
    const EVENTS_TYPES = {
        CLICK: "click",
        };
   

const btn = document.querySelectorAll(".btn")

btn.forEach(btn => {
  btn.addEventListener(EVENTS_TYPES.CLICK, () => {
  
  const item = document.querySelectorAll(".item")
     item.forEach(i=>{
      
       if(i === btn.nextElementSibling && btn.nextElementSibling.style.display !== "block"){
         i.style.display = "block"
       } else{
          i.style.display = "none"
        }
      })
    
    })
  })
}

(function main(){
    window.document.addEventListener("DOMContentLoaded",App)
}())

