const wrap = document.getElementById("container")
function restClient() {
   const get = (url) => fetch(url).then((res) => res.json())
   return { get: get }
}

restClient().get('https://pixabay.com/api/?key=26064067-98f00b9c93709870db9008ce6&q=car&image_type=photo&per_page=50')
.then(res => {
   console.log(res.hits)
   draw(res.hits)
   getId(res)
})

function draw(data) {
   for (let i = 0; i < data.length - 2; i++) {
      let div = document.createElement('div')
      let img = document.createElement('img')
      let p = document.createElement('p')
      img.src = data[i].largeImageURL
      img.style.width = '244px'
      img.style.height = '244px'
      p.innerText = data[i].tags
      p.style.textAlign = 'center'
      div.className = 'div'
      div.style.margin = '10px'
      div.append(img)
      div.append(p)
      wrap.append(div)
   }
}

function getId(data) {
   let div = document.getElementsByClassName('div')
   for (let i = 0; i < div.length; i++) {
      div[i].addEventListener('mouseover', function () {
         let el = div[0]
         while (el) {
            if (true) {
               el.classList.remove('active')
            }
            el = el.nextSibling
         }
         console.log(data.hits[i].id)
         this.classList.add('active')
      })
   }
}












