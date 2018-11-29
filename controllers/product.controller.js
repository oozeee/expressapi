const Product = require ('../models/product.model');
const Joi = require('joi');

/// tests ///
exports.healthcheck = (req, res) => {
    const response = {
        message: 'In good health...'
    }
    res.send(response);
};

exports.login = (req, res) => {
    
    const schema = {
        username: Joi.string().min(3).required(),
        password: Joi.string().min(3).required()
    };
    const validationResult = Joi.validate(req.body, schema)
    
    if (validationResult.error){
        res.status(400).send(validationResult.error.details);
    }

    const response = {
        id: '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e',
        username: req.body.username,
        authtoken: 'CuHggexspyuZk8cIL+cQXudnCGE/9BWGhtRpemd8aP9iM2+1G5OSGRU3P6MqQ/q2LXEwSHG1Otbr433ZKi57awGzonHWVWLtsHQ',
        date: Date.now()
    }

    res.send(response);
}