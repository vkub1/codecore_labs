const fs = require('fs');

function pWriteFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err)
            }
            resolve(data);
        })
    })
}

pWriteFile("file.txt", "The contents of my file")

.then(function () { console.log("File write complete!") })

.catch(function (error) { console.error(error) })