const express = require("express");
const app =express();


app.get('/', (req, res) => {
    res.send('Hola Mundo :o')
   })
   app.listen(3000, () => {
    console.log(`Hola Mundo en el puerto: ${3000}`)
   })

   