const mongoose = require("mongoose");

const connectDB = async ()=>{
  await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB is Connected");
}).catch((err)=>{
    console.log("MongoDB connection Error: ", err)
})
}
 

module.exports = connectDB;