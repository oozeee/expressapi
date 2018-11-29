const Product = require ('../models/product.model');
const date = Date.now();
exports.test = (req, res) => {
    res.send('Greetings from the Test Controller');
};

exports.date = (req, res) => {
    res.send(`Date is ${date}`);
}