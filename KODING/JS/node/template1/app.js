const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan')

const app = express() 				
const port = 3000 				

// middleware third-party 
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(morgan('dev'))

// middleware built in 
app.use(express.static('public'))

// middleware defined-user 
app.get('/', (req, res) => { 			
  res.send('Hello World!') 	
})

app.get('/about', (req, res) => { 
  res.render('about', {
    layout: "layout/main_layout",
    name: "aqil", 
    alamat: "saiti" }) 
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 	
})

 