var express = require('express');
var router = express.Router();
let sql = require('../db/sql')
const connection = require('./mysql')

router.get('/', function(req, res) {
  connection.query(sql['numOfViewers'].query, (err, rows, fields)=>{
    if(err) console.log(err);
    res.send({ num: String(rows[0].num), since: String(rows[0].since) });
  });
});

module.exports = router;