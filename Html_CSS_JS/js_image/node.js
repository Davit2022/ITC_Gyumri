let wrap = document.getElementById("wrap")
fetch("https://pixabay.com/api/?key=26064067-98f00b9c93709870db9008ce6&image_type=photo&per_page=50")
    .then(res => { return res.json() })
    .then(res => {
        console.log(res)
        for (let index = 0; index < res.hits.length; index++) {
            wrap.innerHTML += `<div > <img class = Heghine src='${res.hits[index].largeImageURL}'/></div>`
            // ${res.hits[index].tags}   
        }

    })
