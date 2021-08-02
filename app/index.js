const express = require('express');
const morgan = require('morgan');

const routeApiv1 = require('./routes/v1-api');
const app = express();
const port = 3002;

// Middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use('/v1/api',routeApiv1);

app.get('/', (req,res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Starting Server and Listen on ${port}`);
})