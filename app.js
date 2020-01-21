
const express = require('express');
const app = express();
const path = require("path");

const port = 5000;

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.get('/home',(req,res)=>{
    res.render('home',{
        title : 'home',
        subtitle : 'welcome abroad',
        text: 'hello we offer services like like letting you create articles and other fancy and cool staff just feel free to sign up or login and explore our wonderful services exclusively for you'
    });
})

app.get('/articles/add', (req,res)=>{
    res.render('add-articles',{
        title: 'add articles'
    })
})

app.listen(5000, ()=> console.log(`running on port ${port}...!!!`));