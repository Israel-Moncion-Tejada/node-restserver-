/**
 * Create:          Israel Moncion
 * Date:            11/20/2019
 * Objective:       Curso nodejs
 */

// Cargando el config file de la aplicacion
require('..\\config\\config')

// Cargando los modulos necesarios para el server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuracion del body-parser 
// parse application/x-www-form-urlencoded
// Nota: Todos los app.use() son middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', (req, res) => {
    res.json('get Usuarios');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });

    }

});

app.put('/usuario/:id', (req, res) => {

    // res.json('put Usuarios');    
    let id = req.params.id;

    let body = req.body;
    res.json({
        persona: body
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuarios');
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando por el puerto: ${process.env.PORT}`);
});