import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName:String,
    ctc:Number,
    base:Number,
    codingRoundDate:{
        type:Date,
        default: null
    },
    pptDate:Date,
    interviewDate:Date,
})

const companyModel = mongoose.model("Company", companySchema);
export default companyModel;