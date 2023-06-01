import mongoose from "mongoose";

const userSchema = mongoose.Schema({
      name:{
        type:String
      },
      team:{
        type:String
      },
      lost:{
        type:String
      },
      profit:{
        type:String
      }
},{timestamps:true})

export default mongoose.model("cricket",userSchema)