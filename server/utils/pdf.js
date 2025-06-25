
const PDFDocument = require('pdfkit');

function generarPDF({ email, metadata }) {
  return new Promise((resolve) => {
    const doc = new PDFDocument();
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    doc.fontSize(20).text('Entrada al Mariposario', { align: 'center' });
    doc.moveDown();
    doc.text(`Email: ${email}`);
    doc.text(`Fecha: ${metadata?.date}`);
    doc.text(`Hora: ${metadata?.hour}`);
    doc.text('Gracias por tu compra');

    doc.end();
  });
}

module.exports = { generarPDF };
