let result = "";
process.argv.shift();
process.argv.shift()
let sentence = process.argv.join(" ");
for (let index = 0; index < sentence.length; index++ ) {
    if (index % 2 !== 0) {
        result += sentence[index].toUpperCase();
    } else {
        result += sentence[index];
    } 
}
console.log(result);
