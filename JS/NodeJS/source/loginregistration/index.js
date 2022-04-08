const express = require('express'); 
const bodyParser = require('body-parser'); 
const fs = require('fs'); 
const app = express(); 
const port = 7777; 
 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(__dirname + '/pages')); 
 
app.get('/', function(req, res){ 
    res.sendFile(__dirname+'/pages/register.html'); 
}); 
app.post('/register.html', (req, res) => { 
   
    fs.readFile('./data.json', 'utf8', (err, data) => { 
        const newData = data ? JSON.parse(data):[] 
        newData.push(req.body) 
         
        fs.writeFileSync('./data.json',JSON.stringify(newData,null,2)) 
    }) 
    res.redirect("/home.html") 
}) 
 
app.post('/login.html',(req,res)=>{ 
    const userName = req.body.username 
    const password = req.body.password 
    const getData = fs.readFileSync('./data.json', 'utf8') 
    const newGetData = JSON.parse(getData) 
    newGetData.forEach(element => { 

        if(element.username == userName && element.password == password){ 
            res.redirect("/home.html")
            return;
        }
    });

    res.redirect("/login.html") 
}) 
 
app.listen(port, () => { 
    console.log(`You are on port ${port}`) 
})