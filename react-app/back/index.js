require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express");
const app = express();
const cors = require("cors");
const User = require('./model/UserScheme')

mongoose.connect(process.env.USERS_DB, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log('connected to database successfully');
}).catch(()=>{
    console.log('connection to database failed');
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use(express.static('client/build'));

app.post('/create/:username',async(req,res)=>{
  const {username} = req.params  
  const response = await User.create({username,status:true,messeges:[`welcome ${username}`]})
  res.send(response)
})

app.put('/newMessege',async(req,res)=>{
  const {messege,_id} = req.body  
  console.log(messege,_id);
 const response = await User.updateOne({ _id }, { $push: { messeges: messege } });
  res.send(response)
})

app.get('/users',async(req,res)=>{
  const users = await User.find()
  res.send(users)
})

app.put('/setStatus',async(req,res)=>{
  const {status,_id} = req.body
  const response = await User.findOneAndUpdate({_id},{status})
  res.send(response)
})



app.listen(process.env.PORT || 8080,()=>{
    console.log('Server listening in http://localhost:8080')
  });