import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName:String,
    ctc:Number,
    base:Number,
    codingRoundDate:{
        type:Date,
        default: new Date("2025-12-31"),
    },
    pptDate:Date,
    interviewDate:Date,
})

const companyModel = mongoose.model("Company", companySchema);
export default companyModel;