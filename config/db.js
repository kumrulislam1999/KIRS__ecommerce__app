import mongoose from "mongoose";
import colors from "colors";


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB__URL);
        console.log(`Successfully Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
}


export default connectDB;