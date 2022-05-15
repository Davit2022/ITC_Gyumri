const { RestClient } = require("./ApI/restClient")

const { get } = RestClient


get('http://localhost:5500')
.then((res) => { return res.json() })
.then((res) => {
    console.log(res)
})