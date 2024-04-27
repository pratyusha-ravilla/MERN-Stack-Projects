import { Schema, mongoose } from "mongoose";

const doctorSchema=new Schema({

        name:{
            type:String,
            required:true,
            minlength:3

        },
        price:{
            type:Number,
            required:true,

        }},
        {
            timestamps:true
        }

)

const Doctor = mongoose.model("Doctor",doctorSchema)

export default Doctor