const express = require ('express');
const router = express.Router();

// require the controllers which are created in the controller folder
// .test method of product.controller module was exported to be used in other modules
const product_controller = require('../controllers/product.controller');

// a smiple test URL. Request controller for route /test will be defied in cotroller
router.get('/test',product_controller.test);
router.get('/date',product_controller.date);

module.exports = router;

