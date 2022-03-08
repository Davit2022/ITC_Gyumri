let ball = document.querySelector(".ball")
let size = 0
ball.addEventListener("mouseover", ()=>{
    size+=900
    ball.style.marginLeft= size+"px";
});