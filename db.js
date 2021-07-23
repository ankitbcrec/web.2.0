var mysql = require('mysql');

//array for db config
var db_config = {
  host:'127.0.0.1',
  user:'root',
  'password':'password',
  database:'webapp'
}

var connection

//function to handle the connection
function handleDisconnection(){
  connection = mysql.createConnection(db_config);

  //if the conncetion is erroerd out call the handleDisconnection function
  //to reconnect to the db
  connection.connect(function(err)){
    if(err){
      console.log('error while connecting to the db',err);
      setTimeout(handleDisconnection,2000);
    }
  });
  //if the conncetion is lost call the handleDisconnection function
  //to reconnect to the db
  connection.on('error',function(err)){
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
      handleDisconnection();
    }else{
      throw err;
    }
  });
}

handleDisconnection();
