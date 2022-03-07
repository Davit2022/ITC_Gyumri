

let bol = document.querySelector(".bol")

bol.addEventListener("mouseover", ()=>{
   
up = Math.random() * 450
left = Math.random() * 750
   
bol.style.marginTop = up+"50px";
bol.style.marginLeft= left+"50px";
});
    
