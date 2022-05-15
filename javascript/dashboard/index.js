const App = ()=> {
    const wrap = document.getElementById("wrap")
    const HOST = "https://corona-api.com/countries/"

    Promise.all([
        fetch(HOST + "am"),
        fetch(HOST + "ru"), 
        fetch(HOST + "us") 
    ])
    .then((res)=>{
       return Promise.all(res.map((res)=> res.json()))
    }).then((res)=>{
        console.log(res)
        draw(res)
    })
   
   
    function draw(data) {
        const accordion = document.createElement("div")
        accordion.classList.add("accordion")
        for (let i= 0; i < data.length; i++) {
            const item = document.createElement("div")
            const title = document.createElement("div")
            const subPanel = document.createElement("div")
            
            item.classList.add("item")
            title.classList.add("title")
            subPanel.classList.add("sub-panel")

            title.append(data[i].data.code)
            subPanel.append(data[i].data.name)
            item.append(title)
            item.append(subPanel)
            accordion.append(item)
        }
       
        wrap.append(accordion)
        ClickItem()
    }

    function ClickItem(){
        const subPan = document.getElementsByClassName("sub-panel")
        const item = document.getElementsByClassName("item")
        for (let i = 0; i < item.length; i++){
            item[i].addEventListener("click", function(){
                const current = document.getElementsByClassName("active");
                if (current.length > 0) { 
                    current[0].className = current[0].className.replace(" active", " ");
                }
                subPan[i].className +=" active";
            })
        }
    }
}
 

(function int(){
    window.document.addEventListener('DOMContentLoaded', App)
}())

