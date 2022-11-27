import * as tools from './tools.mjs';
import fs from 'fs';

console.log('importing translations...');

(async () => {
	const translations = await tools.getTranslations();

	fs.writeFile('./src/data/translations.json', JSON.stringify(translations), () => {
		console.log('finished')
	});
})();