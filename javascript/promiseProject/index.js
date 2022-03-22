
const API = 'https://pixabay.com/api/?key=26064067-98f00b9c93709870db9008ce6&q=car&image_type=photo&per_page=50';
const App = () => {
    function getArr(){
        const get = (url) => fetch(url).then((res) => res.json())
        return { get: get }
    }
   
    async function getArrImages(){
        try {
            const arrObj = await getArr().get(API)
            console.log(arrObj)
        } catch(err) {
            console.log(err.message +  'error')
        }
    }

    getArrImages()

    function job(){
        return new Promise((res,rej) => {
            res(getArr().get(API))
        })
    }
   
    let myPromise = job()
    myPromise
    .then((res) => {
        console.log(res)
    }).then(() => {
        throw new Error('Error')
    }).catch((err) => {
        console.log(err +' ' + 'error')
        return 'Success'
    }).then((res) => {
        console.log(res)
    })



}


window.document.addEventListener("DOMContentLoaded", App)