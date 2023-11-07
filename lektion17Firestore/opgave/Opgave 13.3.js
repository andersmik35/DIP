// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore   } from "firebase/firestore";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3fcMyKhQ8mQ9OGcYudYnbPBt_CR5hULQ",
  authDomain: "message-app-7627a.firebaseapp.com",
  projectId: "message-app-7627a",
  storageBucket: "message-app-7627a.appspot.com",
  messagingSenderId: "296232316752",
  appId: "1:296232316752:web:ca523479e1a42271b24655"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const dbMsgs = firebase.firestore().collection("beskeder");


import express from 'express';
const app = express();
const port = 8000;

let beskeder = [{ afsender: "Ole", tekst: "Min første besked", chatrum: "rum1", nummer: "1" }, { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "rum2", nummer: "2" }];
let chatRum = [{ navn: "rum1" }, { navn: "rum2" }];

//Tillad cors requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.get('/beskeder', (request, response) => {
    response.status(200);
    response.send(beskeder);
});
app.get('/beskeder/:chatrum', (request, response) => {
    response.status(200);
    let result = [];
    for (let besked of beskeder) {
        if (besked.chatrum == request.params.chatrum) {
            result.push(besked);
        }
    }
    response.send(result);
});
app.get('/chatrum', (request, response) => {
    response.status(200);
    response.send(chatRum);
});

app.post('/beskeder', (request, response) => {
    console.log(request.body);

    dbMsgs.add(request.body).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    });

    response.status(201);
    response.send("Added");
});

app.listen(port);

console.log('Lytter på port ' + port + ' ...');