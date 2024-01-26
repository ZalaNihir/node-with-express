const fs = require('fs');

// Blocking Request
console.log("bloking request start.");
const result = fs.readFileSync("contects.txt","utf-8");
console.log(result);
console.log("bloking request end.");
console.log("=-------------------------=--------------------=")
// Non Blocking Request
console.log("Non bloking request start.");
fs.readFile("contects.txt","utf-8",(err, result)=>{
    if(err){
        console.log(err);
    }
    if(result){
        console.log(result);
    }
});
console.log("Non bloking request end.");

// please check the console for it

// Default thread pool size is 4
// Max: - 8 core v cpu that means i get the max 8 threads