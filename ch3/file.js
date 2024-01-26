const fs = require('fs');

// for createthe file with synk method is that

// Sync.. Bloking request
// fs.writeFileSync('test.txt','The content of the files is placed here like key or password or desc key etc.')

// Asyncronose... Non Bloking request
// fs.writeFile('test.txt','This is from the asyncroness files .', (err) => {
//     if(err != null){
//         console.log(err);
//     }
// });


// For read files synchrones
// const readFileSync = fs.readFileSync("./contects.txt","utf-8");
// console.log(readFileSync);


// For read files asynchrones
// fs.readFile("./contects.txt","utf-8", (err, result) => {
//     if(err){
//         console.log("Error is ",err);
//     }
//     if(result){
//         console.log(result);
//     }
// });


// Append data in file
fs.appendFileSync("./text.txt",new Date().getTime().toLocaleString());

// The general use of is that to create the log file 
fs.appendFileSync("./test.txt",`\n ${Date.now()} This is new text`);

// Copy paste files
fs.copyFile('text.txt','copy.txt',(err)=>{
    if(err){
        console.log(err);
    }
});
// delete files 
fs.unlink('text.txt',(err)=>{
    if(err){
        console.log(err);
    }
});