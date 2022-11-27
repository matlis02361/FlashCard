import Excel from 'exceljs';

const fileName = './backend/output/test.xlsx';

const wb = new Excel.Workbook();
const ws = wb.addWorksheet('Translations');

ws.getCell('A1').value = 'test';
ws.getCell('B1').value = 'test2';

const r3 = ws.getRow(3);
r3.values = [1, 2, 3, 4, 5, 6];

wb.xlsx
  .writeFile(fileName)
  .then(() => {
    console.log('file created');
  })
  .catch(err => {
    console.log(err.message);
  });

console.log('saved.');
