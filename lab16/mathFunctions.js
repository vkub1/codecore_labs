function add(num1, num2 = 0) {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            if (isNaN(num1) || isNaN(num2)) {
                reject('Please pass only numbers to the add function');
            }
            resolve(num1+num2);
        })
    })
}

function mult(num1, num2 = 1) {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            if (isNaN(num1) || isNaN(num2)) {
                reject('Please pass only numbers to the mult function');
            }
            resolve(num1 * num2);
        })
    }) 
}

function div(num1, num2 = 1) {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            if (isNaN(num1) || isNaN(num2)) {
                reject('Please pass only numbers to the div function');
            } else if (num2 === 0) {
                reject('You cannot divide by 0')
            }
            resolve(num1 / num2);
        })
    }) 
}

function sub(num1, num2 = 0) {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            if (isNaN(num1) || isNaN(num2)) {
                reject('Please pass only numbers to the sub function');
            }
            resolve(num1 - num2);
        })
    }) 
}

function pow(num1, num2 = 1) {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            if (isNaN(num1) || isNaN(num2)) {
                reject('Please pass only numbers to the pow function');
            }
            resolve(num1 ** num2);
        })
    }) 
}

add(9)
    .then(value => add(9, value))
    .then(value => add(2, value))
    .then(value => mult(5, value))
    .then(value => div(value, 10))
    .then(console.log).catch(console.log)


// pow(2)

// .then(r => pow(2, r)) // r is 2

// .then(r => pow(2, r)) // r is 4

// // .then(r => mult("fitty-two", r)) // r is 16, but the mult('fitty-two', ...)

// // should reject

// .then(console.log) // never makes it here

// .catch(console.log); // error logs 'fitty-two is not a valid number'