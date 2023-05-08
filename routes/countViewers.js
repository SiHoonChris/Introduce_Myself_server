var express = require('express');
var router = express.Router();
let sql = require('../db/sql')
const connection = require('./mysql')

router.post('/', function(req, res) {
  connection.query(sql['countViewers'].query, (err, rows, fields)=>{
    err ? console.log(err) : console.log('counted') ;
  });
});

module.exports = router;