require('dotenv').config()
const express= require('express')
const workoutroutes=require('./routes/workouts')
const mongoose=require('mongoose')

const cors = require('cors');

const app=express()

app.use(express.json())
app.use(cors());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/workouts',workoutroutes)


mongoose.connect(process.env.MONG_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
  console.log("Done");
})
.catch((e) => console.log(e));

const PORT = process.env.PORT || 1337;

app.listen(PORT)
