var express = require('express');
var router = express.Router();
var pool = require('../modules/pool')

// router.get('/', function (req, res) {
//     // console.log('Info get route was hit server side :');
//     // console.log('get user is: ', req.user);
//     pool.connect(function (err, client, done) {
//         if (err) {
//             console.log("Error connecting: ", err);
//             res.sendStatus(500);
//         }
//         client.query("SELECT * FROM transactions WHERE username = $1;",
//             [req.user.username],
//             function (err, result) {
//                 done();
//                 if (err) {
//                     console.log("Error selecting data: ", err);
//                     res.sendStatus(500);
//                 } else {
//                     res.send(result.rows);
//                 }
//             });//end of error handling for DB query
//     });//end of pool.connect   
// });//end of router.get