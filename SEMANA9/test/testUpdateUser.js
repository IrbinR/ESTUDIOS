var dao=require('../model/updateUser');
const idUser=1;
const inputData={
    nombre: 'Juan Updated',
    email: 'update@idat.edu.pe',
    distrito: 'COMAS',
    pais: 'USA'
}
dao.updateUser(inputData,idUser,function(data){
    console.log("Se actualizaron : "+ data.affectedRows+" registros");
});