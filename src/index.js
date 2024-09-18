const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
dotenv.config();
const port = process.env.PORT;

// Setting The View Engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));

// using helmet for middleware security purpose
app.use(helmet())


app.get('/', (req, res) => {
    res.render('index.ejs',{name:'aum'});
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});