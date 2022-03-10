let wrap = document.getElementById("wrap")

fetch("https://pixabay.com/api/?key=26064067-98f00b9c93709870db9008ce6&q=car&image_type=photo&per_page=50")
    .then(res => { return res.json() })
    .then(res => {
        for (let i = 0; i < 50; i++) {
            wrap.innerHTML += '<div class="flip-box"> <div class = "flip-box-inner" > <div class = "flip-box-front" > <img src = ' + res.hits[i].largeImageURL + ' alt = '+ i + ' style = "width:300px;height:200px" > </div> <div class = "flip-box-back" > <h1> ID ' + i + '</h1> </div> </div> </div> '
        }
    })
