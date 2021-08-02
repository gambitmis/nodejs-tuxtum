const express = require('express');
const router = express.Router();

const players = require('../data');

router.get('/',(reg,res) => {
    res.json(players);
});

module.exports = router;