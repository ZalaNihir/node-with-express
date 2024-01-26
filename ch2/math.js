// The bellow function is a private functions for this file only you can not use it in other file 
// function add(n,m){
//     return n + m;
// }
// For the use it in other files you have to export this functions

function add(n,m){
    return n + m;
}
function sub(n,m){
    return n - m;
}
function mul(n,m){
    return n * m;
}
function div(n,m){
    return n / m;
}

module.exports= {
    add,sub,mul,div
};