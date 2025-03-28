const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const productRoute = require('./routes/productRoute.js');
var cors = require('cors')
var path = require('path')
const connectDB = require('./db/db.js')

const app = express()

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', productRoute);
//app.use("/images", express.static('uploads'))


app.use(express.static(path.join(__dirname, "public")));
app.use("/api/files",express.static(path.join(__dirname, "upload")));


// const connectDB = async () =>{
//     try{
//   const conn =await mongoose.connect(process.env.DB_URI)
//    console.log(`MongoDB Connected: ${conn.connection.host}`);
  
//   } catch(error) {
//     console.error(`Error: ${error.message}`)
//     process.exit()
//   }
//   }
  connectDB()




app.get('/', (req, res) => {
    res.send('Hello world!, Like say?')
})


const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})