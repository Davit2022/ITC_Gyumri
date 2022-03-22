
const App = ()=> {
    const ball = document.getElementById("ball")
    let x = 0
    function BallDraw(e){
        console.log(e.type)
        x+=5
        this.style.marginLeft =  x + 'px'
    }

    ball.addEventListener("mouseover", BallDraw)
}

window.document.addEventListener("DOMContentLoaded",App)