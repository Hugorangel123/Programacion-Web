const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const cors = require('cors');
const { jsPDF } = require("jspdf");
const fs = require('fs');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '/imagenes/')); 
  },
  filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});


const upload = multer({ storage: storage })
app.use(cors());

app.use(express.json());
app.use(express.text());
app.use(upload.single('Archivo')); 



// app.post('/usuario',(req,res) => {
// console.log(req.body)


// const doc = new jsPDF();
// doc.text(`Hola ${req.body.nombre}`, 10, 10);
// doc.save( path.join(__dirname+'/archivoss/a4.pdf'));

// res.sendFile((__dirname+'/archivoss/a4.pdf'))
// });

// app.post('/usuario', (req, res) => {
//   const doc = new jsPDF();
//   doc.text(`Hola ${req.body.nombre || "Usuario"} ${req.body.apellido}`, 10, 10);
//   const pdfBuffer = doc.output('arraybuffer'); // Generar buffer del PDF
//   res.setHeader('Content-Type', 'application/pdf');
//   res.send(Buffer.from(pdfBuffer)); // Enviar el PDF directamente

  
// });

app.post('/usuario', upload.single('Archivo'), (req, res) => {
  const {nombre, apellido} = req.body; // Obtén los datos del formulario
  const imagenPath = req.file ? req.file.path : null; // Ruta de la imagen subida

  const doc = new jsPDF();

  const Ancho = doc.internal.pageSize.getWidth();
  const x = Ancho / 2;

  doc.setFont('helvetica', 'bold')
  doc.text(`Hola ${nombre},  ${apellido}`, x, 10, { align: 'center' });

  if (imagenPath) {
      // Leer la imagen y convertirla a base64
      const imgData = fs.readFileSync(imagenPath, 'base64');
      const imgBase64 = `data:image/png;base64,${imgData}`; 
      doc.addImage(imgBase64, 'PNG', 10, 20, 50, 50, { align: 'center' }); // Agregar imagen al PDF
  }

  const pdfFileName = `PDF-${Date.now()}.pdf`; // Nombre único basado en la marca de tiempo
  const pdfPath = path.join(__dirname+ '/archivoss/', pdfFileName);

  doc.save(pdfPath); // Guarda el PDF

  res.json({ message: "PDF generado correctamente", pdfPath });
});


app.listen(4000,()=>{
 console.log("Servidor Express corriendo y escuchando en el puerto 4000")
});

