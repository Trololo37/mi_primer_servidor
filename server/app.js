const http = require('http');
//const express = require('express');
const fs = require('fs');

// HTTP => request, response

http.createServer((req, res) => {
    const file = req.url == '/' ? 
    './www/index.html' : `./www${req.url}`;

    if(req.url == '/registro'){
        let data = [];
        req.on('data', (value) => {
            data.push(value);
        }).on("end", ()=>{
            let params = Buffer.concat(data).toString();
            res.write(params);
            res.end();
        });//falta el else
    }else{
        fs.readFile('./www/index.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("Not Found");
            return;
        }else{
        // response
        const extension = req.url.split('.').pop();
        switch(extension){
            case 'css':
                res.writeHead(200, { 'Content-Type': 'text/css' });
                break;
            case 'js':
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                break;
            case 'png':
                res.writeHead(200, { 'Content-Type': 'image/png' });
                break;
            case 'jpg':
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                break;
            case 'html':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                break;
            default:
                res.writeHead(200, { 'Content-Type': 'text/html' });
        }
        res.write(data);
        res.end();
    }
    });
    // request

    }
}).listen(4444, () => {
    console.log('Server is running on port 4444');
});