const express=require('express')
const app=express();
const multer = require('multer');
const mimetype=require('mime-types')
const Alumno=require('./models/Alumnos')
const bodyParser=require('body-parser')
const routedb=require('./routes/alumnos')
// Base de datos 

require('./database')
app.use(bodyParser.urlencoded({
    extended: true
    }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get("/alumnos",(req,res)=>{
    res.sendFile(__dirname+"/views/alumnos.html")
})


app.use(routedb)

const storage=multer.diskStorage({ // para definir como se llamra el archivo
    destination:'uploads',
    filename: function(req,file,cb){
       //cb("",file.originalname,".jpg")
       const img=cb("",file.originalname,".",mimetype.extension(file.mimetype))
       
    }
})


const storageCedula=multer.diskStorage({ // para definir como se llamra el archivo
    destination:'uploadsCedulas',
    filename: function(req,file,cb){
       //cb("",file.originalname,".jpg")
       const cedulas=cb("",file.originalname,".pdf",mimetype.extension(file.mimetype))
       
    }
})

const upload=multer({
    //dest:'uploads/'
    storage:storage // con storage llamamos a esas caractirsticas 
})

const uploadCedulas=multer({
    //dest:'uploads/'
    storage:storageCedula // con storage llamamos a esas caractirsticas 
})

app.post("/files",upload.single('avatar'),(req,res)=>{//sigle solo un archivo
    res.send('Okey archvo Agregado')

})
app.post("/cedulas",uploadCedulas.single('avatar'),(req,res)=>{//sigle solo un archivo
    res.send('Okey archvo Agregado')

})


app.listen(3031,()=>console.log("Servidor iniciado"))