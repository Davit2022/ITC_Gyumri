const express = require('express');
const app = express();

app.use(express.static('src'))

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/src/pages/register.html')
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/src/pages/login.html')
})

app.listen(8080, (err) => {
    if(err) throw err.message
    console.log(`Server running port ${8080}`)
})