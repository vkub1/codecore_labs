const fs = require('fs');

const readfile = process.argv[2];
const writefile = process.argv[3];


fs.readFile(readfile, 'utf8', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        let lines = data.split('\n');
        let deleted_lines = "";
        for (const line of lines) {
            if (line.split(',')[2] !== 'yes') {
                deleted_lines+= line + "\n";
            }
        }
        fs.writeFile(writefile, deleted_lines, (err) => {
            if (err) {
                console.log(err);
            } 
        });
    }
});



