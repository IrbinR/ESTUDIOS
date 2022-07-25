var db=require('../config/dbconfig');
module.exports={
    getUsuarios:function(callback){
        var sql='SELECT*FROM usuarios';
        db.query(sql,function(err,data){
            if(err)throw err;
            return callback(data);
        });
    }
}