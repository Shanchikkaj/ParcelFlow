const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const parcelRoute = require("./routes/Parcel");

dotenv.config();
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//Routes
app.use("/auth",authRoute)
app.use("/users", userRoute)
app.use("/parcels",parcelRoute)

//DATABAse Connection
const DB = process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("Databse connection is successful");
}).catch((err)=>{
    console.log(err)
})

//SERVER

const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
