import express, { json } from 'express';
import cors from 'cors';
import companyModel from './schema/Company.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

 mongoose.connect(process.env.DB_CONNECT).then(res=>console.log("mongodb  connect success")).catch(err=>console.log("mongodb connect error"))

app.listen(8080, async () => {
    console.log('Server is running on port 8080');

});

app.post('/add', async (req, res) => {
    const newCompany = new companyModel(req.body);

    try {
        const savedCompany = await newCompany.save();
        res.status(201).json({ message: 'Company added successfully', data: savedCompany });
    } 
    catch (err) {
        console.error('Error saving company:', err);
        res.status(500).json({ message: 'Error adding company to the database' });
    }
});

app.get('/companies', async (req, res) => {
    try {
        const companies = await companyModel.find();
        console.log(companies);
        res.json(companies);
    } catch (err) {
        console.error('Error reading file:', err);
    }
});

app.put('/companies', async (req, res)=>{
    console.log(req.body)
    try{
        const updatedCompanies = req.body;
        await companyModel.deleteMany();
        const newCompanies = await companyModel.insertMany(updatedCompanies);
        res.status(200).json({message:'Companies added succesfully', data:newCompanies})
        // fs.writeFileSync('companies.json', JSON.stringify(req.body))
    }
    catch(err){
        console.log(err);
    }
})

app.patch('/companies', async (req, res)=>{
    try{
        const selectedCompany = req.body;
        const company = await companyModel.findByIdAndUpdate(
            {_id:selectedCompany._id},
            selectedCompany,
            {new:true}
        );
        if(!company){
            return res.status(404).json({message: 'Company not found'});
        }
        res.status(200).json({message:"File updated successfully"});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
    //res.send(req.body)
})


