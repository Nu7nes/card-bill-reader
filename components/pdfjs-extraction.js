const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const pdfjsLib = require('pdfjs-dist');

// Caminho do arquivo PDF
const pdfPath = './docs/fatura_cartaobusiness7719_2023-04.pdf';

// Função para extrair o texto do PDF
async function extractTextFromPDF() {
  const loadingTask = pdfjsLib.getDocument(pdfPath);
  const pdf = await loadingTask.promise;

  const canvas = createCanvas(2000, 2000); // Tamanho do canvas
  const ctx = canvas.getContext('2d');

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.0 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };

    await page.render(renderContext);
    const textContent = await page.getTextContent();

    let pageText = '';
    for (const textItem of textContent.items) {
      pageText += textItem.str + ' ';
    }

    console.log('Texto extraído da página', pageNumber, ':', pageText);
  }
}

// Chamada da função de extração
func
extractTextFromPDF().catch((error) => {
  console.error('Erro ao extrair texto do PDF:', error);
});
