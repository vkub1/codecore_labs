let rows = parseInt(process.argv[2]);

for (let i = 0; i < rows; i++) {
    let spaces = rows - 2 - i
    if (spaces >= 0) {
        console.log(" ".repeat(spaces) + " #".repeat(i + 1));
    }
    else {
        console.log("#" + " #".repeat(i));
    }
}

