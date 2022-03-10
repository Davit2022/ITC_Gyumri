let ball = document.querySelector(".ball")

ball.addEventListener("mouseover", () => {
    up = Math.random() * 500
    left = Math.random() * 500
    ball.style.marginTop = up + "80px";
    ball.style.marginLeft = left + "80px";
});