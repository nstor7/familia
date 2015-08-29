console.log('Iniciando el Servidor de la Familia');

var express = require('express');
var app = express();
//var parcero = require('body-parser');
//app.use(parcero.urlencoded({extended: true}));
servidor = app.listen(8080, function(){
    console.log('Arrancó con Éxito el Servidor de la Familia');
});

app.use('/', express.static('aplicacion'));