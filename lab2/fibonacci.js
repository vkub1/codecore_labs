let fibonacci = [];
let result = "";
let len = process.argv[2];
if (len === 1) {
    result += "1";
} else if (len === 2) {
    result += "1 1"
}
else if (len > 2) {
    result += "1 1"
    fibonacci.push(1);
    fibonacci.push(1);
    for (let i = 2; i < len; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        result += ` ${fibonacci[i]}`
    }
}

console.log(result);