import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config({path:'./config.env'});

const dbConnection = async () => {
    const DB_URI =process.env.DATABASE;
    try{
await mongoose.connect(DB_URI);
console.log("Connection successful");

    } catch(error){
        console.log("Connection failed", error.message);
    }
}

export default dbConnection;