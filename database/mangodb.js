const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connted:${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;

// const connectDB = aync()=>{
//     try {
//         const con = mongoose.connect(process.env.MONGO_URL,()=>{
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })
//         console.log(`connected!:${con.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }
