const mysql = require("mysql2")

//connection with mysql
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'9708',
    database:'homeapp'
})

connection.connect((err)=>{
   if(err) throw err
   console.log('connection is done')
})



var query ='create table if not exists product (homeid int,img varchar(2000),city varchar(255),title varchar(32),price int,primary key(homeid))'
connection.query(query,(err,result)=>{
    if(err) throw err
    console.log('table is created') 
})

module.exports.conn = connection

