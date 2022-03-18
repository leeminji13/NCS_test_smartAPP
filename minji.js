var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('minji.js 출력되는지 확인')
})

app.listen(8080,()=>{
    console.log('콘솔창확인 서버구동 완료')
})