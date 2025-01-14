const mongoose = require("mongoose")
const serverConfig=require('./serverConfig')

 /* 
 This below function helps to connect with mongoDB server */ 

async function connectDB() {
   try{
    await mongoose.connect(serverConfig.DB_URL);
    console.log('Successfully connected to the mongoDb server.....');
    
   }catch(error)
   {
    console.log('Not able to connect mongoDb server');
    console.log(error);
    

   }
    
}

module.exports=connectDB;