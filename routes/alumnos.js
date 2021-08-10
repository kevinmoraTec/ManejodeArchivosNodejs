const express=require('express')
const router=express.Router();
const Alumno=require('../models/Alumnos')
//require('./database')


router.post('/alumnos',async (req,res)=>{
    const{cedula,nombre,apellido,telefono,ciudad}=req.body;
   //const estudiante=new Alumno(req.body)
   const alumno=new Alumno({cedula,nombre,apellido,telefono,ciudad})
   await alumno.save();
   res.redirect("/")
})

module.exports=router;