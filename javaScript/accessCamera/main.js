const vidio = document.querySelector(".vidio")
const canvas = document.querySelector(".canvas")
const context = canvas.getContext('2d')
const btn = document.querySelector(".btn")

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getDisplayMedia({vidio:true}).then(function(stream){
        vidio.srcObject = stream
        vidio.play()
    })

    }

    btn.addEventListener("click",()=>{
        context.drawImage(vidio,0,0,500,500)
    })