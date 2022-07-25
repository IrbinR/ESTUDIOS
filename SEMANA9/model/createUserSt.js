var db=require('../config/dbconfig');
module.exports={
    createUsuario:function(inputData,callback){
        var sql='INSERT INTO usuarios SET ?';
        db.query(sql, inputData,function(err, data){
            if(err) throw err;
            return callback(data);
        });
    }
}