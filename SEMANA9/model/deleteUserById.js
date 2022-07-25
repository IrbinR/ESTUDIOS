var db = require('../config/dbconfig');
module.exports={
    deleteUserById:function(userId,callback){
        var sql=`DELETE FROM usuarios WHERE id=${userId}`;
        db.query(sql,function(err,data){
            if(err) throw err;
            return callback(data);
        });
    }
}