const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/alumnos',{
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db=>console.log('Db Mongo Conectada'))
.catch(err=>console.error(err))