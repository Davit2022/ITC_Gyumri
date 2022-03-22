    const res = document.getElementById("res")
    Webcam.set({
        width: 333,
        height: 250,
        image_format: 'jpg',
        jpeg_quality: 90
    })

    Webcam.attach("#camera")

    function take_snapshot(){
        Webcam.snap(function(data){
            const img = document.createElement("img")
            img.src = data
            res.append(img)
        })
    }
    take_snapshot()

    







