import http from 'http';

const server = http.createServer((req,res)=>{
    res.write("hello from http");
    res.write("hello again")
    res.end();
})

server.listen(3001)