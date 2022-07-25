var db=require('../config/dbconfig');
module.exports={
    updateUser:function(inputData,updateId,callback){
        var sql='UPDATE usuarios SET ? WHERE id=?';
        var sql2=`UPDATE usuarios SET ? WHERE id=${updateId}`;
        db.query(sql,[inputData,updateId],function(err,data){
            if(err) throw err;
            return callback(data);
        })
        }
    
}