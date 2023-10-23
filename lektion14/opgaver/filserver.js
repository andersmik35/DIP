import express from 'express';
import fs from 'fs/promises';

const app = express();
const port = 8080;

var files = "C:\\Users\\Bruger\\Desktop\\x03. Semester\\Distribueret Pro\\dip";

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

app.get('/', async (request, respond) => {
    let filnavne = await fs.readdir(files + '/filer');
    let html = genererLinks(filnavne);
    respond.writeHead(200, {"Content-Type": "text/html"}); // OK
    respond.send(html);    
});

app.get('/fil/:navn', async (request, response) => {
    let sti = __dirname + '/filer' + request.url;
    let filData = await fs.readFile(sti);
    response.writeHead(200); // OK
    response.send(filData);
});



app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});