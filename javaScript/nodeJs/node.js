
import { createServer } from "http";




const server = createServer((req,res)=>{
   res.writeHead(200,{"Content-Type":"text/plain"});
   res.end("Hello Gyumri");
});

server.listen(3001)