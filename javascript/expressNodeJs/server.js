const express = require('express');
const app = express();
const fs = require("fs")

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/html/register.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/html/login.html')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/html/home.html')
})

app.post('/register', (req, res) => {
    fs.readFile('public/db.json', 'utf8', (err,data)=>{
        const arrReg = data ? JSON.parse(data):[]
        arrReg.push(req.body)
        console.log(JSON.stringify(arrReg))
        fs.writeFileSync('public/db.json', JSON.stringify(arrReg, null,2))
        res.redirect('/login')
    })
})


app.post('/login',(req, res)=>{
    const objL = JSON.stringify(req.body)
    const objLp = JSON.parse(objL)

    console.log(objLp)
    fs.readFile('public/db.json','utf8',(err,data)=>{
        if(err) throw err
        const arrR = JSON.parse(data)
        arrR.forEach(el => {
            if(el.registerEmail == objLp.loginEmail && el.registerPassword == objLp.loginPassword){
                res.redirect('/home')
            } 
        });
    })
})

app.listen(8090)



