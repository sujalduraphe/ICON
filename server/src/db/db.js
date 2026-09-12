
import mongoose from "mongoose"

async function DBConnect() {
    try {
        if(!process.env.MONGO_URI){
            console.log("MONGO_URI is not defined in environment variables")
        }
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully")
    }
    catch(error){
        console.log("Database connection failed", error)
    }
}
export default DBConnect;