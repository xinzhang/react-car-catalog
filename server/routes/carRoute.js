const express = require('express');
const router = express.Router();
const carRepository = require('../repositories/carRepository');

router.get('/maker', (req, res) => {
    carRepository.getAllMakers().then( makers => {
        res.json(makers);
    }).catch(err => {
        //log err
        res.status(500).send(err);
    });
});

router.get('/maker/:makerId', (req, res) => {
    const makerId = +req.params.makerId;
    carRepository.getModelsByMakerId(makerId).then( models => {
        res.json(models);
    }).catch(err => {
        //log err
        res.status(500).send(err);
    });
});

router.get('/model/:modelId', (req, res) => {
    const modelId = +req.params.modelId;
    carRepository.getCarByModelId(modelId).then( car => {
        res.json(car);
    }).catch(err => {
        //log err
        res.status(500).send(err);
    });
});

router.get('/carOfWeek', (req, res) => {
    carRepository.getCarOfWeek().then( car => {
        res.json(car);
    }).catch(err => {
        //log err
        res.status(500).send(err);
    });
});

module.exports = router;