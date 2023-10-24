import express from 'express';
import pug from 'pug';
import path from 'path';

const app = express();
const port = 8080;

const user = {
    username : "John",
    age : 30,
    gender: "male"

};


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/user', (req, res) => {
    res.render('user', user);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

