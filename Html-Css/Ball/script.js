let ball = document.querySelector(".ball")

ball.addEventListener("mouseover", ()=>{
   
up = Math.random() * 200
left = Math.random() * 200
   
ball.style.marginTop = up+"40px";
ball.style.marginLeft= left+"40px";

});
