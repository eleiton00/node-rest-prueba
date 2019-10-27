const express = require('express');
const app = express();


app.get('/usuarios', function(req, res) {
    res.json('get Usuarios');
});

app.post('/usuarios', function(req, res) {
    res.json('Post Usuarios');
});

app.put('/usuarios', function(req, res) {
    res.json('put Usuarios');
});

app.delete('/usuarios', function(req, res) {
    res.json('delete Usuarios');
});

app.listen(3000, () => {

    console.log('Escuchando puerto: ', 3000);

});