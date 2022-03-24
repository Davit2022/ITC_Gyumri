const Acc = () => {
    Promise.all([
        fetch("https://corona-api.com/countries/am"),
        fetch("https://corona-api.com/countries/ru"),
        fetch("https://corona-api.com/countries/us")
      ]).then((streams)=>{
        return Promise.all(streams.map((stream)=> stream.json()));
      }).then((results)=>{
        get (results)
      });   
      
      function get(data){
        const am = document.querySelector("#am")
        const ru = document.querySelector("#ru")
        const us = document.querySelector("#us")
        am.innerHTML= data[0].data.latest_data.deaths
        ru.innerHTML= data[1].data.latest_data.deaths
        us.innerHTML= data[2].data.latest_data.deaths
      }
      
    document.querySelectorAll(".acordeon").forEach((el) => {
        el.addEventListener("click", () => {
            const content = el.nextElementSibling;
            if(content.style.maxHeight){
                document.querySelectorAll(".content").forEach((el) => el.style.maxHeight = null)
            }else{
                document.querySelectorAll(".content").forEach((el) => el.style.maxHeight = null)
                content.style.maxHeight = content.scrollHeight + "px"
            }
        })
    })
}
window.document.addEventListener('DOMContentLoaded', Acc); 