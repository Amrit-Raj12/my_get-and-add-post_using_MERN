const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const MainRouter=require('./routes/mainroute')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/',MainRouter)


const Mongourl='mongodb://localhost:27017/Mernprojectreal'
mongoose.connect(Mongourl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
  if(!err){
    console.log("Yes Connected to Mongo");
  }else{
    console.log("Not Connected");
  }
})

app.listen(5000,()=>console.log("Running server on 5000"))
