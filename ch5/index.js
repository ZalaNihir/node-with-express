const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end;
    const log  = `\n ${Date.now()}: New Recieved for ${req.url}`; 
    const myUrl = url.parse(req.url, true); // The url package is for url parse like getting the values from the users
    console.log(myUrl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myUrl.pathname){
            case '/': 
                res.end("Hello");
            break;
            case '/about-us': 
                const username = myUrl.query.username;
                res.end(`Hi, ${username}`);
            break;
            case '/search': 
                const uname = myUrl.params;
                res.end(`Hi, ${uname}`);
            break;
            case '/signup': 
                if (req.method === 'GET') res.end("This is signup page form");
                else if(req.method === 'POST') {
                    // DB Query 
                    req.end('Success');
                }
            break;
            case 'contact-us': 
                res.end("Contact us page");
            default:
                res.end("404 Not found");
        }
    });
});

myServer.listen(8000,()=>{
    console.log("server started at ","localhost:"+8000);
})