const video = document.querySelector(".video")
const canvas = document.querySelector(".canvas")
const context = canvas.getContext('2d')
const btn = document.querySelector(".btn")

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getDisplayMedia({video:true}).then(function(stream){
        video.srcObject = stream
        video.play()
    })

    }

    btn.addEventListener("click",()=>{
        context.drawImage(video,0,0,500,500)
    })