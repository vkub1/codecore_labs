let fizz = process.argv[2];
let buzz = process.argv[3];

for (let number = 1; number < 101; number++) {
    if (number % fizz === 0 && number % buzz === 0) {
        console.log('fizzbuzz');
    } else if (number % fizz === 0) {
        console.log('fizz');
    } else if (number % buzz === 0) {
        console.log('buzz');
    } else {
        console.log(number);
    }
}