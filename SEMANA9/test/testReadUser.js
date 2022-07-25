var dao=require('../model/readUserSt');
dao.getUsuarios(function(data){
    console.table(data);

})