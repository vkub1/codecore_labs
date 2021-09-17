const fs = require('fs');

const pigface = '🐷';
// const readfile = process.argv[2];
// const writefile = process.argv[3];

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function isLetter(c) {
    return (c.toLowerCase() != c.toUpperCase());
}

function swapLetters(str) {
    let raw_word = str.split("");
    let letter = raw_word.shift();
    let last_index = raw_word.length - 1;
    if (!isLetter(raw_word[last_index])) {
        while(!isLetter(raw_word[last_index]) && last_index >= 0) {
            last_index--;
        }
        raw_word.splice(last_index, 0, letter);
        return raw_word.join("");
    } else {
        raw_word.push(letter);
    }
    return raw_word.join("");
}

// fs.readFile(readfile, 'utf-8', (err, data) => {
//     console.log(`Translating into ${pigface}...`)
//     if (err) {
//         console.log(err);
//     } else {
//         let translated_text = "";
//         let lines = data.split('\n');
//         let words = [];
//         for (const line of lines) {
//             words.push(line.split(' '))
//         }
//         for (letter of words) {
//             while (vowels.includes(letter)) {
                
//             }
//         }
//     }
// })

let word = swapLetters('trash!');
console.log(swapLetters(word));




