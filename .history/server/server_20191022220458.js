const express = require('express');
const app = express();


app.get('/usuarios', function(req, res) {
    res.json('get Usuarios');
});



app.listen(3000, () => {

    console.log('Escuchando puerto: ', 3000);

});