const ball = document.getElementById("ball")
let x = 0

ball.addEventListener("mouseover", function(e){
    console.log(e.type)
    x+=5
    this.style.marginLeft =  x + 'px'
})