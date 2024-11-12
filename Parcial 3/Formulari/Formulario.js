const express = require("express");
const pug =require('pug');
const path = require('path');
const app =express();

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'))


app.listen(4000, () => {
    console.log(`Pug: ${4000}`)
   })
app.use(express.json())

app.get('/Estudiantes', (req, res) => {
   console.info(req.query)
    res.render('admin')
})

app.get('/Maestros', (req, res) => {
    console.info(req.body)
     res.render(`Maestros`)
 })

app.get('/Maestros/:id', (req, res) => {
    console.info(req.params.id)
     res.render(`Maestro con id ${req.params.id}`)
 })

   