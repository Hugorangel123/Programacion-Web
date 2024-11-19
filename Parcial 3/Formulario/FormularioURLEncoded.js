const express = require("express");
const pug =require('pug');
const path = require('path');
const app =express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));


app.listen(5000, () => {
    console.log(`Servidor en el puerto: ${5000}`);
   });


app.post('/Estudiantes', (req, res) => {
   console.log(req.body);
   res.send(`Hola ${req.body.nombre}`);
});
   


   