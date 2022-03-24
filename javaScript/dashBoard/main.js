const App = ()=>{
    const EVENTS_TYPES = {
        CLICK: "click",
        };

Promise.all([
  fetch("https://corona-api.com/countries/am"),
  fetch("https://corona-api.com/countries/ru"),
  fetch("https://corona-api.com/countries/us")
]).then((streams)=>{
  return Promise.all(streams.map((stream)=> stream.json()));
}).then((results)=>{
    console.log(results[0].data.name)
  get (results)
});   

function get(data){
  const am = document.querySelector("#am")
  const ru = document.querySelector("#ru")
  const us = document.querySelector("#us")
  am.innerHTML= data[0].data.name
  ru.innerHTML= data[1].data.name
  us.innerHTML= data[2].data.name
}

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

