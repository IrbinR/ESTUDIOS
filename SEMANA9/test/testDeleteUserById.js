var dao=require('../model/deleteUserById');
const id=2;
dao.deleteUserById(id,function(data){
    console.log(`Se elimino : ${data.affectedRows} registros`);
})