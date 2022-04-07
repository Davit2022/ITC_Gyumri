const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))



  app.post('/register.html', (req, res) => {
  
       fs.readFile('./data.json', 'utf8', (err, data) => {
         const newData = data ? JSON.parse(data):[]
         newData.push(req.body)
        
         fs.writeFileSync('./data.json',JSON.stringify(newData,null,2))
    })
      res.redirect("/home.html")
  })
app.post('/index.html',(req,res)=>{
  const userName = req.body.username
  const password = req.body.password
  
    const getData = fs.readFileSync('./data.json', 'utf8')
    const newGetData = JSON.parse(getData)
     newGetData.forEach(element => {
       if(element.username == userName && element.password == password){
        res.redirect("/home.html")
       }else{
         res.redirect("/index.html")
       }
     });
  

})

  const port = 3003
  app.listen(port)