/**
 * Création d'un Token API
 *
 * On crée une API locale pour récupérer un token d'utilisateur
 */

const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

/**
 * Notre app contient deux arguments le premeier contient nos données de la rêquete
 * Puis le second gère le resulat
 */
app.use('/login', (request, result) => {
    result.send({
        token: 'test222'
    });
})

app.use('/register')

app.listen(8080, () => console.log('http://localhost:8080/login'));