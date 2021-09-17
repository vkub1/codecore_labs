const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const number = parseInt((Math.random() * 9) + 1);
let guess = 0;



function askQuestion (number, guess) {
    if (guess === 0) {
        console.log('I\'m thinking of a number between 1 and 10');
    }
    rl.question('> ', (answer) => {
        if (parseInt(answer) === number) {
            guess++;
            rl.close();
            console.log(`Guessed "${number}" correctly in ${guess} attempts!`);
            return true;
        } else {
            guess++;
            console.log('Nope. Try again.');
            askQuestion(number, guess);
        }
    }) 
    
}

askQuestion(number, guess);





