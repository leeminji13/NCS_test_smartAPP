var express = require('express');
var app = express();

var getsend = require('./send/getsend')
var postsend = require('./send/postsend')
var sqlsend = require('./send/sqlsend')

app.get('/',(req,res)=>{
    res.send('minji.js 출력되는지 확인')
})
app.use('/get',getsend)
app.use('/post',postsend)
app.use('/sql',sqlsend)

app.listen(8080,()=>{
    console.log('콘솔창확인 서버구동 완료')
})