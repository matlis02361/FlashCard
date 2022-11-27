import Excel from 'exceljs';
import * as tools from './tools.mjs';

(async () => {
	const wb = new Excel.Workbook();
	await wb.xlsx.readFile(tools.translationFilePathAndFileName);
	const ws = wb.getWorksheet(1);

	// ws.getCell('A1').value = 'test';
	const r3 = ws.getRow(3119); // TODO: find the end of the file dynamically
	r3.values = ['English', 'German', 'house', 'das House'];

	wb.xlsx
		.writeFile(tools.translationFilePathAndFileName)
		.then(() => {
			console.log('file changed');
		})
		.catch((err) => {
			console.log(err.message);
		});

})();
