let sentence = process.argv[2];
let result = "";

for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === sentence[index].toUpperCase()){
        result += sentence[index].toLowerCase();
    } else {
        result += sentence[index].toUpperCase();
    }
}
console.log(result);
