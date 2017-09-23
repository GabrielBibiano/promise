const fs = require('fs')

const readMyFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./arquivo.html', (err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
} 

const writeMyFile = (name, data) => {
    fs.writeFile(`${name}.html`, data, err => {
        if(err) throw err;
        console.log('DEU BOM!');
    })
}

/* 
    Trechos correspondentes:
    1 - readMyFile().then( template => writeMyFile('novoArquivo', template));
*/

//  2 -
const createNewTemplate = async (name) => {
    const template = await readMyFile();
    writeMyFile(name, template);
}

createNewTemplate('novoArquivo');