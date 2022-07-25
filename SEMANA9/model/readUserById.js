var db=require('../config/dbconfig');
module.exports={
    getUserById:function(idUsuario,callback){
        var sql='SELECT*FROM usuarios WHERE id=' + idUsuario;
        var sql2=`SELEC*FROM usuarios WHERE id = ${idUsuario}`;
        db.query(sql,function(err,data){
            if(err)throw err;
            return callback(data[0])
        });
    }
}