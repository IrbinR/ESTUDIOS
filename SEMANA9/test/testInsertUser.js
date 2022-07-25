var userDAO=require('../model/createUserSt');
const inputData={
    id:2,
    nombre:'Miguel Perez',
    email:'d3@.idat.edu.pe',
    distrito:'San Borja',
    pais:'Peru'
};
userDAO.createUsuario(inputData,function(data){
    console.log('Se insertaron : '+data.affectedRows+" registros");
})
