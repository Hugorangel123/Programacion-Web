const express = require("express");
const pug =require('pug')
const app =express();



app.use(express.json())
app.get('/', (req, res) => {
   
    res.send('Hola Mundo :o')
   })
   app.listen(3000, () => {
    console.log(`Hola Mundo en el puerto: ${3000}`)
   })


app.get('/Estudiantes/', (req, res) => {
   console.info(req.query)
    res.send(`Estudiante ${req.query.control}`)
})

app.get('/Maestros', (req, res) => {
    console.info(req.body)
     res.send(`Maestros`)
 })

app.get('/Maestros/:id', (req, res) => {
    console.info(req.params.id)
     res.send(`Maestro con id ${req.params.id}`)
 })

   