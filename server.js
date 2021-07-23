const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {save_user_information} = require('./models/server_db');

//app.use(express.json());

//handelling the json and parsing the values
app.use(bodyParser.json());


//checking console message
console.log('cheking the port listner');

//setting up the listner port
app.listen(3000, () =>{
  console.log('server is running in the port 3000');
});

//redirecting to the web browser http://localhost:3000/
/*
  app.get('/', (req,res) =>{
  res.send("hello world!");
});
*/

//  code block to expose the api
// add asncy in the post request to catch the promises request first else
// else the app will crash
app.post('/', async (req,res) =>{
  var email = req.body.email;
  var amount = req.body.amount;

//  code block to validate if the lottery amount is less than x values

  if(amount <= 1){
    return_info = {};
    return_info.error = true;
    return_info.message = "The amount must be greate than 1";
    return res.send(return_info);
  }

  var result = await save_user_information({"amount" : amount, "email" : email});
  //res.send({"amount" : amount, "email" : email);
  res.send(result);
});
