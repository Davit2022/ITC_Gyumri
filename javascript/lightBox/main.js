const App = () => {
    const body = document.getElementById("body");
    function restClient() {
        const get = (url) => fetch(url).then((res) => res.json())
        return { get: get }
     }
     
     restClient().get('https://pixabay.com/api/?key=26064067-98f00b9c93709870db9008ce6&q=car&image_type=photo&per_page=50')
     .then(res => {
        console.log(res.hits)
        draw(res.hits)
     })


    function draw(data){
        const wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")
        const gallery = document.createElement("div")
        gallery.classList.add("gallery")
        const shadow = document.createElement("div")
        shadow.classList.add("shadow")
        const currentImg = document.createElement("p")

        for (let i = 0; i < data.length-46; i++) {
            const image = document.createElement("div")
            const span  = document.createElement("span")
            const img = document.createElement("img")
            img.src = data[i].largeImageURL
            image.classList.add("image")
            span.append(img)
            image.append(span)
            gallery.append(image)

        }
        wrapper.append(gallery)

        const previewBox = document.createElement("div")
        const details = document.createElement("div")
        const imageBox = document.createElement("div")
        const spanTitle = document.createElement("span")
        const span = document.createElement("span")
        const totalImg = document.createElement("p")
        const slidePrev = document.createElement("div")
        const slideNext = document.createElement("div")
        const italicLeft = document.createElement("i")
        const italicRight = document.createElement("i")
        const disImage = document.createElement("img")

        currentImg.classList.add("current-img")
        totalImg.classList.add("total-img")

        spanTitle.classList.add("title")
        spanTitle.append("Image ")
        spanTitle.append(currentImg)
        spanTitle.append("of ")
        spanTitle.append(totalImg)
        span.classList.add("icon")
        span.classList.add("fa")
        span.classList.add("fa-times")

        italicLeft.classList.add("fa")
        italicLeft.classList.add("fa-angle-left")
        italicRight.classList.add("fa")
        italicRight.classList.add("fa-angle-right")

        previewBox.classList.add("preview-box")
        details.classList.add("details")
        imageBox.classList.add("image-box")
       

        slidePrev.classList.add("slide")
        slidePrev.classList.add("prev")
        slidePrev.append(italicLeft)
        slideNext.append(italicRight)

        slideNext.classList.add("slide")
        slideNext.classList.add("next")
        disImage.src = data[0].largeImageURL
        
      

        details.append(spanTitle)
        details.append(span)

        previewBox.append(details)
        previewBox.append(imageBox)
        imageBox.append(slidePrev)
        imageBox.append(slideNext) 
        imageBox.append(disImage)
        body.append(wrapper)
        body.append(previewBox)
        body.append(shadow)
        ClickMe()
    }


    function ClickMe() {
        const gallery  = document.querySelectorAll(".image"),
        previewBox = document.querySelector(".preview-box"),
        previewImg = previewBox.querySelector("img"),
        closeIcon = previewBox.querySelector(".icon"),
        currentImg = previewBox.querySelector(".current-img"),
        totalImg = previewBox.querySelector(".total-img"),
        shadow = document.querySelector(".shadow");


        for (let i = 0; i < gallery.length; i++) {
            totalImg.textContent = gallery.length; 
            gallery[i].onclick = () => {
                clickedImgIndex = i; 
                const prevBtn = document.querySelector(".prev");
                const nextBtn = document.querySelector(".next");

                console.log(gallery)
                let index = 0
                let y = index + 1
                currentImg.append(y)
                nextBtn.addEventListener("click", function(){
                    index++
                    if(index <= gallery.length-1){
                        y++
                        currentImg.innerHTML = y
                        let img = gallery[index].querySelector("img").src
                        previewImg.src = img
                        img.classList.add("disable")
                    }
                })      

                prevBtn.addEventListener("click", function(){
                    index--
                    if(index >= 0){
                        y--
                        currentImg.innerHTML = y
                        let img = gallery[index].querySelector("img").src
                        previewImg.src = img
                        img.classList.add("disable")
                    }  
                })


                body.style.overflow = "hidden";
                previewBox.classList.add("show"); 
                shadow.style.display = "block"; 
                closeIcon.onclick = ()=> {
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                }
            }
        }
    }
}


(function() {
    window.document.addEventListener("DOMContentLoaded", App)
}())