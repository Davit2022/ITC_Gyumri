const App = () => {
    const ball = document.querySelector(".ball")
    ball.addEventListener("mouseover", ()=>{
        ball.style.marginLeft +="900px";
    });
}
window.document.addEventListener('DOMContentLoaded', App)