const http = require('http')
const fs = require('fs');

const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html')
    res.write('<h1>helo world</h1>');
    // res.end();

    //Sending File

    fs.readFile('./index.html',(err,filedata)=>{
        if(err){
            console.log('file not found');
        }
        else{
            // res.write();
            res.end(filedata) // if there is multiple res. then require res.write else res.end is ok...
        }
    })
    // console.log(req.url);
    // console.log(req.method);
});

server.listen(3000,'localhost',()=>{
    console.log('server is listening');
})


// '''Create Server Directly'''

// http.createServer((req,res)=>{
//     // console.log('server is created');
//     res.write('helo world');
//     res.end();
// }).listen(3000);