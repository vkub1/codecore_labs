const express = require('express');
const path = require('path');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', 'views');

const fs = require('fs');
const { response } = require('express');

const PORT = 3000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
    console.log(`Server listening on http://${DOMAIN}:${PORT}`);
})


app.get('/car_status:car_year?', (request, response) => {
    if (request.query.car_year) {
        let year = parseInt(request.query.car_year);
        let car_condition = "";
        if (year > 2021) {
            car_condition = "Your car is from the future!";
        } else if (year >= 2015 && year < 2022) {
            car_condition = "Your car is new!";
        } else if (year >= 2000 && year <= 2014) {
            car_condition = "Your car is old!";
        } else {
            car_condition = "Your car is very old!"
        }
        response.render('car_status', {
            car_status: car_condition
        });
    } else {
        response.render('car_status', {
            car_status: "Please enter a year to find out the condition of your car"
        });
    }
})

app.get('/random_person:names?', (request, response) => {
    if (request.query.names) {
        let arr = request.query.names.split(',');
        let randomWinner = parseInt(Math.random() * arr.length)
        response.render('random_person',{
            winner: `The winner is ${arr[randomWinner]}`
        })
    } else {
        response.render('random_person', {
            winner: "No winner yet!"
        });
    }
})

app.get('/fizz_buzz/:number1?/:number2?', (request, response) => {
    console.log(request.query);
    if (request.query.number1 && request.query.number2) {
        let fizz_arr = [];
        const num1 = parseInt(request.query.number1);
        const num2 = parseInt(request.query.number2);
        for (let i = 1; i <= 100; i++) {
            if (i % num1 == 0 && i % num2 == 0) {
                fizz_arr.push("Fizz buzz")
            } else if (i % num1 == 0) {
                fizz_arr.push("Fizz");
            } else if (i % num2 == 0){
                fizz_arr.push("Buzz")
            } else {
                fizz_arr.push(i)
            }
        }
        response.render('fizz_buzz', {
            fizz_buzz: fizz_arr
        })
    } else {
        response.render('fizz_buzz', {
            fizz_buzz: []
        });
    }
});

app.get('/directory_lister', (request, response) => {
    fs.readdir(__dirname, (err,files) => {
        if (err) {
            response.send('An error occured');
        }
        response.render('directory_lister', {
            files: files
        })
    })     
});

const personality_types = {
    'Rational': {
        work_best: ["With Deadlines", "Without Deadlines"],
        self_opinion: ["Rational"],
        interests: ["Ideas"]
    },
    'Guardian': {
        work_best: ['With Deadlines'],
        self_opinion: ['Compassionate', 'Rational'],
        interests: ['Facts']
    },
    'Idealist': {
        work_best: ['With Deadlines', 'Without Deadlines'],
        self_opinion: ['Compassionate'],
        interests: ['Ideas']
    },
    'Artisan': {
        work_best: ['Without Deadlines', 'Without Deadlines'],
        self_opinion: ['Compassionate'],
        interests: ['Facts']
    }
}
app.get('/personality_survey/:work_best?/:self_opinion?/:interests?', (request, response) => {
    if (!request.query.work_best || !request.query.self_opinion || !request.query.interests) {
        console.log('if');
        response.render('personality_survey', {
            personality: "Make sure to answer all questions before submitting"
        })
    } else {
        console.log('else');
        for (const personality in personality_types) {
            if (personality_types[personality].work_best.includes(request.query.work_best) &&
                personality_types[personality].self_opinion.includes(request.query.self_opinion) &&
                personality_types[personality].interests.includes(request.query.interests)) {
                response.render('personality_survey', {
                    personality: personality
                })
            }
        } 
    }  
})

app.get('/:number1?/:number2?/:method_add?/:method_sub?/:method_mult?/:method_div?', (request,response) => {
    let addition_result = "";
    let subtraction_result = "";
    let multiplication_result = "";
    let division_result = "";
    if (request.query.method_add) {
        if (!isNaN(parseFloat(request.query.number1)) && !isNaN(parseFloat(request.query.number2))) {
            addition_result = `${parseFloat(request.query.number1) + parseFloat(request.query.number2)}`
        }
    } 
    if (request.query.method_sub) {
        if (!isNaN(parseFloat(request.query.number1)) && !isNaN(parseFloat(request.query.number2))) {
            subtraction_result = `${parseFloat(request.query.number1) - parseFloat(request.query.number2)}`
        }
    }
    if (request.query.method_mult) {
        if (!isNaN(parseFloat(request.query.number1)) && !isNaN(parseFloat(request.query.number2))) {
            multiplication_result = `${parseFloat(request.query.number1) * parseFloat(request.query.number2)}`
        }
    } 
    if (request.query.method_div) {
        console.log('div');
        if (!isNaN(parseFloat(request.query.number1)) && !isNaN(parseFloat(request.query.number2))) {
            if (parseFloat(request.query.number2) === 0.0) {
            division_result = "You cannot divide by 0"
            } else {
            division_result = `${parseFloat(request.query.number1) / parseFloat(request.query.number2)}`
            }
        }
    }
    response.render('calculator', {
        number1: request.query.number1 ?? '',
        number2: request.query.number2 ?? '',
        addition_result: addition_result,
        subtraction_result: subtraction_result,
        multiplication_result: multiplication_result,
        division_result: division_result
    })
    
})

app.get('/bill_splitter', (request, response) => {
    console.log(request);
    response.render('bill_splitter');
})



