let ball = document.querySelector(".ball")

ball.addEventListener("mouseover", ()=>{   
up = Math.random() * 300
left = Math.random() * 300   
ball.style.marginTop = up+"40px";
ball.style.marginLeft= left+"40px";
});
