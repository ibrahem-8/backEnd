const express= require('express')
var app= express();
//var json= require('json')

app.get('/',function(req,res)
{
    res.send("start server")
})

function fact(num){
    var result = num;
    if (num === 0 || num === 1) 
        return 1; 
    while (num > 1) { 
        num--;
        result *= num;
  }
  return result;
}

function multi(num){
    var result =[]
    for(let i=0; i<11; i++){
        result.push(num*i)

        
    }
    return result;
}

function fib(num){
        let a = 0;
        let b = 1;
      
        if (num === 0) {
          return a;
        }
      
        for (let i = 2; i <= num; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
      
        return b;
      
}

function C_sum(num){
 var result = 0;

 for (let i=0; i<=num; i++)
 {
    result+=i
 }
  return result;
}

function string(str){
    const reversed =str.split("").reverse().join("");
    return str === reversed;
}


app.get('/string/:word', function(req,res)
{ 
    var string1 =string(req.params.word)
    res.json("this string is" + string1)
})



app.get('/C_sum/:num', function(req,res)
{ 
    var C_sum1 =C_sum(req.params.num)
    res.json("C_sum1 is" + C_sum1)
})


app.get('/fib/:num', function(req,res)
{ 
    var fib1 =fib(req.params.num)
    res.json("fib is" + fib1)
})


app.get('/fact/:num', function(req,res)
{ 
    var myFact =fact(req.params.num)
    res.json("fact is" + myFact)
})

app.get('/multi/:num', function(req,res)
{ 
    var multi1 =multi(req.params.num)
    res.json(multi1)
})

var server= app.listen(7000, function()
{
    var host = server.address().address  
    var port = server.address().port 
})