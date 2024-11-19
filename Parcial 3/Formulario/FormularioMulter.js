const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');


const folder = path.join(__dirname+'/archivos'); 
const upload = multer({dest:folder});
app.use(cors());

app.use(express.json());
app.use(express.text());
app.use(upload.single('archivo')); 


app.post('/usuario',(req,res) => {
console.log(req.body)
res.send(`Hola  :0${req.body.nombre}`)
});

app.listen(9999,()=>{
 console.log("Servidor Express corriendo y escuchando en el puerto 9999")
});