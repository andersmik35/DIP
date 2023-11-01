import express from 'express';
const app = express();
import sessions from 'express-session';
import pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';


app.use(session({
    secret: 'hemmelig', // En hemmelig nøgle til at signere session-id'et
    resave: false, // Gem session selvom der ikke er sket ændringer
    saveUninitialized: true, // Gem session, selvom den ikke er blevet initialiseret
    cookie: {
        maxAge: 1000 * 60 * 20 // Tid i millisekunder for hvor længe sessionen skal være gyldig
    }
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set("views", __dirname + "/views");

const produkter = [
    { id: 1, navn: 'vand', pris: 10 },
    { id: 2, navn: 'cola', pris: 20 },
    { id: 3, navn: 'fanta', pris: 15 }
];

app.use(express.json());

app.get('/index', (request, response) => {
    let tekster = request.session.tekster || [];
    const indkoebskurv = request.session.indkoebskurv || [];

    // Find de valgte produkter baseret på id'er fra indkøbskurven
    const valgteProdukter = produkter.filter(produkt => indkoebskurv.includes(produkt.id));

    const valuesForTemplate = { tekster, produkter, valgteProdukter };

    response.render('index', valuesForTemplate);
});


app.post('/buy', (request, response) => {
    const { id } = request.body;
    let indkoebskurv = request.session.indkoebskurv || [];
    indkoebskurv.push(id);

    request.session.indkoebskurv = indkoebskurv;
    console.log(`Produkt med id ${id} blev tilføjet til indkøbskurven.`);
    response.status(201).send('Produkt tilføjet til indkøbskurven.');
});

app.listen(3000);
console.log('Lytter på port 3000 ...');
