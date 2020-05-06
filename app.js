const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const personRoutes = require('./routes/person');

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.get('/', (req,res,next) =>{
    res.send("<h1>Welcome to my API.</h1>");
});


app.use('/person',personRoutes);

app.get('*', (req,res,next) => {
    res.send("<h1>Not Found</h1>")
});


app.listen(1234);
