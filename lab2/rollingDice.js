let rolls = parseInt(process.argv[2]);
let sides = parseInt(process.argv[3]);

let sum = 0;

for (let i = 0; i < rolls; i++) {
    let result = Math.floor((Math.random() * sides)+ 1);
    sum += result;
    console.log("Rolled: ", result);
}
console.log("--------------------");
console.log("Average Roll:", Math.round(sum/rolls));
console.log("Total: ", sum);