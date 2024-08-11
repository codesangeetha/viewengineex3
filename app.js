const express = require('express');
const app = express();

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    const obj ={
name:"Flowers",
items:['Rose','Jasmine','Lotus','sunflower']
    };
    res.render('sample',{obj})
});

app.listen(7000,function(){
    console.log("server started at 7000");
});