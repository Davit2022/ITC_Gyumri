const App = () => {
    const URL = 'http://localhost:8080';
    const submit = document.getElementById("submit")

        submit.addEventListener("click",(e) => {
            e.preventDefault()
            const n = document.getElementById("n")
            const s = document.getElementById("s")
            const obj = {
                name: n.value,
                surename: s.value,
            };

            postData(URL, obj)
        })

        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });
            return await response.json();
        }
}


(function(){
    window.document.addEventListener("DOMContentLoaded", App)
})()