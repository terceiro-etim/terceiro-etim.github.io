const express = require('express');
const app = express();
const expbs = require('express-handlebars')

app.engine('hbs', expbs({ defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// Static files
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contato', (req, res) => {
    res.render('contato')
})

app.get('/galeria', (req, res) => {
    res.render('galeria')
})

app.listen(5500, () => {
    console.log('working')
})