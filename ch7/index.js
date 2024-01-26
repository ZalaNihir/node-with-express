const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.setHeader("myName","Nihir Zala"); //This is my custom header
    return res.send("Hello from home page");
});
app.listen(3000, () => console.log('server started successfully.'));
// const myServer = http.createServer(app);
// myServer.listen(8000,()=>{
//     console.log("server started at ","localhost:"+8000);
// })