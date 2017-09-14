var express = require('express');
var router = express.Router();
var pool = require('../modules/pool')

//Inserting new transaction items to DB 
router.post('/', function (req, res) {
    console.log('Info post route was hit server side :', req.body);

    //New object to make query
    // var transactionItem = {
    //     username: req.body.userName,
    //     type: req.body.type,
    //     date: req.body.date,
    //     description: req.body.description,
    //     amount: req.body.amount
    // };
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("INSERT INTO transactions (username, type, date, description, amount)  VALUES ($1, $2, $3, $4, $5);",
            [req.body.userName, req.body.type, req.body.date, req.body.description, req.body.amount],
            function (err, result) {
                done();
                if (err) {
                    console.log("Error inserting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });//end of error handling for DB query
    });//end of pool.connect   
});//end of router.post

//Selecting all transactions for current user
router.get('/', function (req, res) {
    // console.log('Info get route was hit server side :');
    // console.log('get user is: ', req.user);
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("SELECT * FROM transactions WHERE username = $1;",
            [req.user.username],
            function (err, result) {
                done();
                if (err) {
                    console.log("Error selecting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });//end of error handling for DB query
    });//end of pool.connect   
});//end of router.get

router.put('/', function (req, res) {
    console.log('PUT route was hit with: ', req.body);
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            // when connecting to database failed
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            // when connecting to database worked!
            // query like this: UPDATE messages SET message='Have a really terrific day!' WHERE id=1;
            client.query('UPDATE transactions SET date=$1, description=$2, amount=$3 WHERE id=$4;',
                [req.body.date, req.body.description, req.body.amount, req.body.id],
                function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                });
        }
    });
});

router.delete('/:id', function (req, res) {
    console.log('Info delete route was hit server side :');
    console.log('Delete button req.params is: ', req.params);
    var transactionId = req.params.id;
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("DELETE FROM transactions WHERE id = $1;",
            [transactionId],
            function (err, result) {
                done();
                if (err) {
                    console.log("Error selecting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });//end of error handling for DB query
    });//end of pool.connect   
});//end of router.delete

module.exports = router;