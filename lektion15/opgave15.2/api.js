import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import pug from 'pug';
const app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set('views',"C:\\Users\\Bruger\\Desktop\\3. Semester\\Distribueret Pro\\dip\\lektion15\\opgave15.2");

app.get('/', async (req, res) => {
    const response = await fetch('https://randomuser.me/api/?nat=dk&results=100');
    const data = await response.json();
    const users = data.results;
    res.render('api', {users});    

});

app.listen(port, () => console.log(`Listening on port ${port}`));
