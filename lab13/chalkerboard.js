const chalk = require('chalk');

const rectangle = '█';

const color = process.argv[2];
const width = process.argv[3];
const height = process.argv[4];

let grid = "";


for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (i % 2 === 0) {
            grid += chalk[color](`${rectangle} `); 
        } else {
            grid += chalk[color](` ${rectangle}`); 
        }
    }
    grid += "\n";
}
console.log(grid);