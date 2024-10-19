import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName:String,
    ctc:Number,
    base:Number,
    codingRoundDate:{
        type:Date,
        default: () => new Date(Date.UTC(2025, 11, 31)),
    },
    pptDate:{
        type:Date,
        default: () => new Date(Date.UTC(2025, 11, 31)),
    },
    interviewDate:{
        type:Date,
        default: () => new Date(Date.UTC(2025, 11, 31)),
    },
})

const companyModel = mongoose.model("Company", companySchema);
export default companyModel;