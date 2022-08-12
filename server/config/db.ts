import mongoose from "mongoose";

const connectDB = () => {

  try {
    mongoose.connect(`${process.env.MONGO_URL}`);
   } catch (err) {
    console.error(err.message);
  }

  const connection = mongoose.connection;

  if(connection.readyState>=1){
      console.log('Connected to database!')
      return;
  }
  connection.on('error', (error)=>{
      console.log("Connection failed!")
  })
};

export default connectDB;