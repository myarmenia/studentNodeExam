import mongoose, { mongo } from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected To DB");
        return true
    } catch (error) {
        console.error({ServerError:"Error With Connection to DB"});
        return false
    }
}

export default connection