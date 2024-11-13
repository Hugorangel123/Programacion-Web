const express = require('express');
const app = express(); // Ejecutamos la funcion express()
app.use( express.urlencoded({extended: true,}) ); // Funcion Middleware Para interpretar un body codificado como URLEncoded
app.post('/usuario/',(req,res) => {
 console.log(req.body);
 res.send('Se recibio el formulario:'+JSON.stringify(req.body));
});
app.listen(4000,()=>{
 console.log("Servidor Express corriendo y escuchando en el puerto 8082")
});