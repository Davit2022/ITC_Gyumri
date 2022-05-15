// const http = require('http');
// const fs = require('fs'); 

// const app = http.createServer((req, res) => {
//     if(req.url === '/login') {
//         fs.readFile('./html/login.html', (err, data)=> {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             console.log('login')
//             res.end(); 
//         })
//     }

//     if (req.url === '/register' && req.method === 'POST') {
//         fs.readFile('./html/register.html', (err, data)=> {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             console.log('register')
//             res.end(); 
//         })

//         // const body = [];
  
//         // req.on('data', (chunk) => {
//         //     body.push(chunk);
//         //     console.log(body)
//         // });

//         const obj = JSON.stringify(body)

//         fs.appendFile('./html/myJson.json', obj, (err) => {
//             // if (err) throw err;
//             console.log('Saved!');
//         });

//     } 
    
    
//     if(req.url === '/json') {
//         fs.readFile('./html/myJson.json', (err, data)=> {
//             res.write(data);
//             console.log('json')
//             res.end(); 
//         })
//     }
// })

// app.listen(8080);
const http = require("http")
const fs = require("fs")


const server = http.createServer((req, res) => {
    const data = [];
    req.on('data', (chunk) => {
        data.push(chunk)
    })
    req.on('end', () => {
        fs.appendFile("words.json", data , function(err) {
            if (err) throw err
            console.log("The file was saved!");
        });
    })

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if ((req.url === "/login" || req.url === "/")) {
        res.write("<h2>res.end(Home)</h2>");
    } else if (req.url == "/register" && req.method === "POST") {
        res.end(JSON.stringify({ name: 222 }));
    }
    res.end(JSON.stringify({ name: 222 }));
})

server.listen(8080)