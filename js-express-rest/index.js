const express = require('express');
const app = express();
const logger = require('morgan');
const notesRouter = require('./routes/notes');
const billsSplitter = require('./routes/bills');
const tasksRouter = require('./routes/tasks');

const methodOverride = require('method-override');

const path = require('path');
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
    }
}))

app.get('/', (req, res) => {
    res.render('home');
})

app.use('/notes', notesRouter);
app.use('/bills', billsSplitter);
app.use('/tasks', tasksRouter);
const PORT = 3000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, function () {
    console.log(`The server is running at http://${DOMAIN}:${PORT}`);
});
