const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(express.static('client/build'));



app.listen(process.env.PORT || 8080,()=>{
    console.log('Server listening in http://localhost:8080')
  });