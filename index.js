const express = require('express');
const app=express();
const queries= require("./routes/queries")

const mongoose = require("mongoose")

//db connection
mongoose.connect('mongodb://localhost/dblearning')
.then(()=>console.log("CONNECTED TO DB"))
.catch((err)=>console.log(err))


//


//using Routes
app.use("/Allqueries",queries)
app.use("/addquery",queries)
app.use("/getQueries",queries)

app.use("/getQueries/names",queries)
app.listen(3000,()=>{
    console.log("3000")
})




