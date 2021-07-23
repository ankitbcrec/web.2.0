var db = require('../db.js');

//Using the promises.js to retrieve and insert the data
save_user_information = (data) => new Promise((resolve,reject) => {
  //the data from the the above row will be added into the ? (QUESTION mark)
  //in the below line
  db.query('insert into lottery_information set ?', data, function(err, rows, fields) {
    if(err){
        reject('could not insert into lottery_information');
    }
        resolve('Record is successully inserted !');
  });
});



get_total_amount = (data) => new Promise((resolve,reject) => {
  //the data from the the above row will be added into the ? (QUESTION mark)
  //in the below line
  db.query('select sum(amount) as total_amount from lottery_information ', null, function(err, rows, fields) {
    if(err){
        console.log('db error', err);
        reject('could not get the amount');
    }
        resolve(rows);
  });
});

//export this query so that it can be used in the server.js
module.exports = {
  save_user_information
}
