const fs = require('fs');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) reject(err);
            resolve(files);
        })
    })
}

function writeFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

readdir('./files/')
    .then(files => {
        console.log(files);
        let callbacks = [];
        for (const filename of files) {
            callbacks.push(readFile(`./files/${filename}`));
        }
        console.log(callbacks);
        return Promise.all(callbacks);
    }).then(data => {
        console.log(data);
        writeFile('result.txt', data.join('\n'));
    })
    .catch(console.log)


