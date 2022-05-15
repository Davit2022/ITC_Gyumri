
const RestClient = () => {
    const get = (url) => {
        return fetch(url).then(response => response.json())
    }

    const post = (url, body) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(response => { response.json()
            console.log(data)
        }).catch(err => err)
    }
    return { get, post }
}

 module.exports = { RestClient };