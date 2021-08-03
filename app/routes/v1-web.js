const express = require('express');
const router = express.Router();

const players = require('../data');

router.get('/',(reg,res) => {
    res.render('v1-home',{ players: players });
});

module.exports = router;