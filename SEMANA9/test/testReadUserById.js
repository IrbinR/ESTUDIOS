var dao=require('../model/readUserById');
const id=2;
dao.getUserById(id,function(data){
    console.log(data);
    console.table(data);
})