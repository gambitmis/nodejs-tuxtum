const express = require('express');
const router = express.Router();

const players = require('../data');
let playerIdRun = 6;

router.get('/',(reg,res) => {
    res.render('v1-home',{ players: players });
});

router.get('/add',(req,res) => {
    res.render('v1-add');
});

router.post('/add',(req,res) => {
    playerIdRun += 1;
    let playerName = req.body.name;
    let playerFullName = req.body.fullname;
    let playerImgUrl = req.body.img_url;
    console.log(`${playerName} - ${playerFullName} - ${playerImgUrl}`);
    const newPlayer = {
        id: playerIdRun,
        name: playerName,
        fullname: playerFullName,
        imgUrl: playerImgUrl
    }
    players.push(newPlayer);
    res.render('v1-add');

});


router.get('/del/:id',(req,res) => {
    const playerId = Number.parseInt(req.params.id,10);
    const playerIndex = players.findIndex((player) => player.id === playerId );
    console.log(`playerId: ${playerId} on index : ${playerIndex} `);
    players.splice(playerIndex,1);
    res.redirect('/v1/web');
});


router.get('/edit/:id',(req,res) => {
    const playerId = Number.parseInt(req.params.id,10);
    const player = players.find((obj) => obj.id === playerId);
    console.log(player);
    res.render('v1-edit',{ player:player});
});

router.post('/edit/:id',(req,res) => {
    const playerId = Number.parseInt(req.params.id,10);
    const playerName = req.body.name;
    const playerFullName = req.body.fullname;
    const playerImgUrl = req.body.img_url;
    const playerIndex = players.findIndex((player) => player.id === playerId);
    const updatePlayer = {
        id: playerId,
        name: playerName,
        fullname: playerFullName,
        imgUrl: playerImgUrl
    };
    players[playerIndex] = updatePlayer;
    res.redirect('/v1/web');
});
module.exports = router;