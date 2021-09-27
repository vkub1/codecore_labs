const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const tasksRouter = require('./routes/tasks');
const userRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

const path = require('path');

const app = express();




app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use((req, res, next) => {
    res.locals.user = {};
    const userNew = req.cookies.user;
    if (userNew) {
        res.locals.user = userNew;
    }
    next();
})

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        // it changes the request to that method name
        // then this request can reach the correct route
        return method;
    }
}))

app.get('/', (req, res) => {
    const user = req.cookies.user || {};
    const name = user.name || '';
    const language = user.language || 'English';
    const greetings = {
        english: 'Hello',
        french: 'Bonjour',
        spanish: 'Hola'
    };
    let greeting;
    if (name && language) {
        greeting = `${greetings[language]}, ${name}`;
    }
    res.render('home', {
        greeting: greeting,
    })
})


const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;


app.post('/preferred_language', (req,res) => {
    const user = req.cookies.user || {};
    const name = req.body.name || '';
    const language = req.body.language || 'English';
    user.name = name;
    user.language = language;
    res.cookie('user', user, {
        maxAge: COOKIE_MAX_AGE
    })
    res.redirect('/');
})

const preferred_languages = {
    english: 'English',
    french: 'French',
    spanish: 'Spanish'
};
app.get('/preferred_language', (req,res) => {
    const user = req.cookies.user || {};
    const selected = user.language || 'English';
    const name = user.name || '';
    res.render('preferred_language', {
        selected: selected,
        name: name,
        preferred_languages: preferred_languages
    })
})

app.use(tasksRouter);
app.use(userRouter);
app.use(postsRouter);
const PORT = 3000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, function () {
    console.log(`The server is running at http://${DOMAIN}:${PORT}`);
});

