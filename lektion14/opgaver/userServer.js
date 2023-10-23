import express from 'express';
import fetch from 'node-fetch';

const app = express();
const userUrl = 'https://jsonplaceholder.typicode.com/users';

app.get('/', async (req, res) => {
    try {
        const users = await get(userUrl);
        const html = genererTabel(users);
        res.status(200).send(html);
    } catch (error) {
        if (typeof error.message === 'number') {
            res.status(error.message).send(error.name + ": " + error.message);
        } else {
            res.status(400).send(error.name + ": " + error.message);
        }
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error(response.status);
    }
    return await response.json();
}

function genererTabel(users) {
    let html = '<table>';
    for (const user of users) {
        html +=
            `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.company.name}</td></tr>\n`;
    }
    html += '</table>';
    return html;
}


