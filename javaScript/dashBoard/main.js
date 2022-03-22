const App = ()=>{
    const EVENTS_TYPES = {
        CLICK: "click",
        };
    const btn = document.querySelectorAll("#btn")
    const item = document.querySelectorAll("#item")

    btn.forEach(element => 

        element.addEventListener(EVENTS_TYPES.CLICK, () => showHide(item))
      
        )


    const showHide = (element) => {
        element.forEach(element=>
            element.style.display = 
            element.style.display === "none" 
                ? "block" 
                : "none"
            
            )
        
     }
}

(function main(){
    window.document.addEventListener("DOMContentLoaded",App)
}())

