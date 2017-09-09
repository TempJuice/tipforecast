var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    console.log('Info post route was hit server side :', req.body);

    var incomeItem = {
        username: req.body.userName,
        date: req.body.date,
        type: req.body.type,
        amount: req.body.amount
    };

    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("UPDATE users (date, type, amount) VALUES ($1, $2, $3) WHERE ",
            [saveUser.username, saveUser.password],
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