var db=require('../config/dbconfig');
var sql="INSERT INTO usuarios VALUES(1,'Christian Castillo','d1@idat.edu.pe','lima','lima')";
db.query(sql,function(err,result){
    if(err){
        console.log('Ocurrio un error');
        throw err;
    }
    console.log("Un usuario registrado!!");
})