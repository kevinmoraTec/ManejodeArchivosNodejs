const mongose=require('mongoose')
const {Schema}=mongose;

const AlumSchema=new Schema({
    cedula:{type:Number},
    nombre:{type:String},
    apellido:{type:String},
    telefono:{type:String},
    ciudad:{type:String}

})

module.exports=mongose.model('Alumno',AlumSchema);