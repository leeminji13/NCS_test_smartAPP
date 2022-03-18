var express = require('express');
var routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('포스트도 겟방식')
})
module.exports = routes