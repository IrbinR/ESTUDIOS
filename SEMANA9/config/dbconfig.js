var mysql=require('mysql2');
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Anastacio123',
    database:'NODEJS'
});
conn.connect(function(err){
    if(err) throw err;
    console.log('Conectado Exitosamente a base de datos nodejs!');
});
module.exports=conn;