import mongoose from "mongoose";


const TokenSchema = new mongoose.Schema(
    {
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: "Users", required:true},
        token: {type:String, required:true}
    },
    {
        timestamps: true
    }
)

const Token = mongoose.model("Token", TokenSchema)

export default Token