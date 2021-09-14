let side1 = parseFloat(process.argv[2]);
let side2 = parseFloat(process.argv[3]);
let side3 = parseFloat(process.argv[4]);

if (side1 + side2 <= side3 || side1 + side3 <= side2 
    || side2 + side3 <= side1) {
    console.log("Impossible triangle!")
} else {
    let perimeter = (side1 + side2 + side3);
    let p = perimeter/2;
    let area = Math.sqrt((p * (p - side1) *
    (p-side2) * (p - side3)));
    console.log("Perimiter: ", perimeter)
    console.log("Area: ", area);
}