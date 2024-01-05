const mongo=require('mongoose')
const schema=mongo.Schema
const bcrypt= require('bcrypt')

const userschema=new schema({
    name:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true,
        unique:true,
        lowercase:true
    },
   phoneno:{
        type:Number,
        required:true
    }
})
const usermodule=mongo.model('data',userschema)
module.exports=usermodule