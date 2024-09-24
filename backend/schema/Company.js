import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName:String,
    ctc:Number,
    base:Number,
    codingRoundDate:Date,
    pptDate:Date,
    interviewDate:Date,
})

const companyModel = mongoose.model("Company", companySchema);
export default companyModel;