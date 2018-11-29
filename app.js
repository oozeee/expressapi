const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Import routes

// initialize the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/products', product);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})