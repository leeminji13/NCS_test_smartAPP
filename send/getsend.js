var express = require('express');
var routes = express.Router();
var mysql = require('mysql');
var dbconfig = require('../db/dbconfig.js')
var connection = mysql.createConnection(dbconfig)

routes.get('/',(req,res)=>{
    res.send('가벼운데이터는 겟방식')
})
routes.get('/getjson',(req,res)=>{
    res.send({'url':'/getsend/getjson'});
})
routes.post('/post',(req,res)=>{
    res.send({
        'url':'/getsend/post',
        'title':'getsend.js내의 post라우팅'
    })
})
routes.get('/awssql',(req,res)=>{
    connection.query(
        'SELECT * FROM react_suppose.suppose',
        (error,result)=>{
            if(error)throw error;
            res.send(result)
        })
})
module.exports = routes