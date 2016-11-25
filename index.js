var express=require('express')

var app=express();

app.get("/",function (request,response){

response.send('hola mundo');

})

app.listen(3000);