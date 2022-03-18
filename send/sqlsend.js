var express = require('express');
var routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('sql')
})
module.exports = routes