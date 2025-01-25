import Client from "../models/newclient.model.js";
import { z } from "zod";
const ClientSchema = z.object({
    fullName: z.string().min(5, { message: "Must be 5 or more characters long" }),  // Changed username to fullName
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Must be 10 or more digits" }),
    country: z.string(),
    project: z.string(),
    message: z.string().min(51, { message: "Message must be more than 50 characters" }).max(400, { message: "Message must be less than 300 characters" }),
});


export const contactForm = async(req, res)=>{
    const {fullName,email,phone,country,project,message} = req.body;
    try{
        if(!fullName || !email || !phone || !country || !project){
            return res.status(400).json({message:"all fields are required!"})
        }
        const validation = ClientSchema.safeParse({fullName,email,phone,country,project,message});
        if(!validation.success){
            const errorMessage = validation.error.errors.map((err)=>{return err.message})
            return res.status(400).json({message:errorMessage})
        }
        const newclient = new Client({
            fullName,
            email,
            phone,
            country,
            project,
            message
        })
        await newclient.save();
        if(newclient){
            res.status(201).json({message:"Form submitted successfully!", newclient})
        }

    }catch(error){
        console.error(error);
        res.status(500).json({message:"internal server error", error})
    }
}