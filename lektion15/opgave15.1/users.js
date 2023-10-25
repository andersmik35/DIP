const express = require('express');
const pug = require('pug');
const path = require('path');


const app = express();
const port = 8080;

const users = [
    {
        name: 'John Doe',
        age: 34,
        email: 'John@Doe',
        nationality: "gb"
    },
    {
        name: 'Alice Smith',
        age: 28,
        email: 'alice@example.com',
        nationality: "dk"
    },
    {
        name: 'Bob Johnson',
        age: 45,
        email: 'bob@example.com',
        nationality: "de"
    },
    {
        name: 'Jane Doe',
        age: 34,
        email: 'jane@example.com',
        nationality: "fr"
    }
];

console.log(users);


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/user', (req, res) => {
    const {nationality,limit} = req.query;

    if (!nationality || !["gb", "dk", "de", "fr"].includes(nationality)) {
        return res.status(400).send("invalid nationality");
    }
    if (!limit || isNaN(limit) || limit < 10 || limit > 100) {
        return res.status(400).send("invalid limit");
    }

    let filteredUsers = users.filter(user => user.nationality === nationality);

    if (limit) {
        filteredUsers = filteredUsers.slice(0, limit);
    }
    res.render('user', {users: filteredUsers});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

