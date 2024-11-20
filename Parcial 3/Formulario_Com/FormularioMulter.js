const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { jsPDF } = require("jspdf");
const { check, validationResult } = require('express-validator')

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '/imagenes/')); 
  },
  filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});




const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      if (ext !== '.png') {
          return cb(new Error('Solo se permiten archivos PNG.'));
      }
      cb(null, true);
  }
});

app.use(express.json());
app.use(cors());

app.post(
    '/usuario',
    upload.single('imagen'),
    [
      check('edad', 'La edad debe ser numerica: 1234').isNumeric(),
      check('edad', 'Casilla vacia').notEmpty(),
      check('nombre', 'Casilla vacia').notEmpty(),
      check('correo', 'Casilla vacia').notEmpty(),
      check('correo', 'Este correo es').isEmail(),
    ],
    (req, res) => {
      const result = validationResult(req);
  
      if (result.isEmpty()) {
        const { nombre, edad, correo } = req.body;
        const imagenPath = req.file ? req.file.path : null;
  
        const doc = new jsPDF();
  
        const Ancho = doc.internal.pageSize.getWidth();
        const x = Ancho / 2;
  
        doc.setFont('helvetica', 'normal');
  
        doc.setFontSize(16);
        doc.text('Datos:', 10, 10);
  
        doc.setFontSize(12);
        doc.text(`Nombre: ${nombre}`, 10, 30);
        doc.text(`Edad: ${edad} años`, 10, 40);
        doc.text(`Correo: ${correo}`, 10, 50);
  
        if (imagenPath) {
          const imgData = fs.readFileSync(imagenPath, 'base64');
          const imgBase64 = `data:image/png;base64,${imgData}`;
  
          const imageX = 140;
          const imageY = 10;
          const imageWidth = 50;
          const imageHeight = 50;
  
          doc.addImage(imgBase64, 'PNG', imageX, imageY, imageWidth, imageHeight);
        }
  
        doc.text(':D', 10, 80);
  
    
        const pdfData = doc.output(); 
        res.setHeader('Content-Type', 'application/pdf');
        res.send(Buffer.from(pdfData, 'binary'));
      } else {
        res.status(400).json({ errors: result.array() });
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
      }
    }
  );
  

app.listen(9000, () => {
    console.log(`Servidor corriendo en http://localhost:9000`);
});


    