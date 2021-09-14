let percent = parseInt(process.argv[2]);

if (percent > 100) {
    console.log("Please enter a valid percentage!")
} else if (percent >= 86) {
    console.log("A");
} else if (percent < 86 && percent >= 73 ){
    console.log("B");
} else if (percent < 73 && percent >= 67) {
    console.log("C+")
} else if (percent < 67 && percent >= 60) {
    console.log("C");
} else if (percent < 60 && percent >= 50) {
    console.log("C-");
} else if (percent < 50 && percent >=0) {
    console.log("F");
} else {
    console.log("Please enter a valid percentage!")
}

