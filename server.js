const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//handelling the json and parsing the values

app.use(bodyParser.json());


//checking console message
console.log('cheking the port listner');

//setting up the listner port
app.listen(3000, () =>{
  console.log('server is running in the port 3000');
});

//redirecting to the web browser http://localhost:3000/
app.get('/', (req,res) =>{
  res.send("hello world!");
});

app.post('/', (req,res) =>{
  var email = req.body.email
  var amount = req.body.amount

  res.send({"amount" : amount, "email" : email});
});
