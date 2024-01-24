import mongoose from "mongoose";

//creating BookSchema  obj here 
const bookSchema = mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
    },
    author:{
      type:String,
      required:true,
    },
    publishYear:{
      type:Number,
      required:true,
    },
  },
  {
    timestamps: true,
  }
);
//book schema
export const Book = mongoose.model('cat',bookSchema);



