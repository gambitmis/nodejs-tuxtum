const { response } = require('express');
const express = require('express');
const router = express.Router();

const players = require('../data');

let playerIdRun = 6;

router.get('/',(req,res) => {
    console.log(players);
    res.json(players);
});

router.get('/:id',(req,res) => {
    //console.log(players);
    //console.log(req.params.id);
    const playerId = Number.parseInt(req.params.id,10);
    const player = players.find(
        (players) => players.id === playerId );
    //console.log(player);
    res.json(player);
});

router.put('/:id', (req,res) => {
    const playerId = Number.parseInt(req.params.id,10);
    //console.log(playerId);
    const playerIndex = players.findIndex(
        (players) => players.id === playerId);
    const updatePlayer = {
        id: playerId,
        ...req.body
    };
    players[playerIndex] = updatePlayer;
    res.json(updatePlayer);
});

router.delete('/:id', (req,res) => {
    const playerId = Number.parseInt(req.params.id,10);
    //console.log(playerId);
    const playerIndex = players.findIndex(
        (player) => player.id === playerId);
    //console.log(playerIndex);
    players.splice(playerIndex,1);
    //console.log(players);
    res.sendStatus(204);
});

router.post('/', (req,res) => {
    playerIdRun += 1;
    const newPlayer = {
        id: playerIdRun,
        ...req.body
    };
    players.push(newPlayer);
    res.json(newPlayer);
 });


module.exports = router;