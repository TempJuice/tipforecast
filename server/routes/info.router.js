var express = require('express');
var router = express.Router();
var pool = require('../modules/pool')

router.post('/', function (req, res) {
    console.log('Info post route was hit server side :', req.body);

    var incomeItem = {
        username: req.body.userName,
        type: req.body.type,
        date: req.body.date,
        description: req.body.description,
        amount: req.body.amount
    };

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("INSERT INTO transactions (username, type, date, description, amount)  VALUES ($1, $2, $3, $4, $5);",
            [incomeItem.username, incomeItem.type, incomeItem.date, incomeItem.description, incomeItem.amount],
            function (err, result) {
                client.end();

                if (err) {
                    console.log("Error inserting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    });
    
});

module.exports = router;