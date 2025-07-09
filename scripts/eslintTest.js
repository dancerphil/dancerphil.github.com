import {configs} from 'eslint-config-airbnb-extended/legacy';
import {writeFile} from 'fs/promises';

const main = async () => {
    try {
        await writeFile('./tmp.json', JSON.stringify(configs.base.recommended, null, 4), 'utf8')
        console.log('File written successfully');
    }
    catch (error) {
        console.error('Error writing file:', error);
    }
};

main();
