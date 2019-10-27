const express = require('express');
const app = express();


app.get('/usuarios', function(req, res) {
    res.json('get Usuarios');
});

app.post('/usuarios/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id: id,
        nombre: 'Esteban',

    });
});

app.put('/usuarios/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id: id,
        nombre: 'Esteban',

    });

});

app.delete('/usuarios', function(req, res) {
    res.json('delete Usuarios');
});

app.listen(3000, () => {

    console.log('Escuchando puerto: ', 3000);

});