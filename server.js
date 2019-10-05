const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers')

const port =process.env.PORT || 3000



app.use(express.static(__dirname+'/public'));
//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


app.get('/',  (req, res) => {
  
 res.render('home',{
   nombre:'Mario',
   anio: new Date().getFullYear()
 });
});

app.get('/about',  (req, res) => {
  
  res.render('about',{
    nombre:'Mario',
    anio: new Date().getFullYear()
  });
 });


 
app.listen(port, ()=>{
  console.log(`Escuchando en el port ${port}`);
});