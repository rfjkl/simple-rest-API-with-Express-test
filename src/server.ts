import http from "node:http"

function sum(a : number, b : number) : number{
    return a + b;
}

var result = sum(5,6);

console.log(result);


http.createServer((request, response) => {
    response.end("ok")
}).listen(3333)