import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    fullName:
    {type:"String",
    required:true
},
email:{
    type:"String",
    required:true,
    unique:true
},
phone:
    {type:"String",
    required:true
},
country:
{
type:"String",
required:true,
},
project:{
    type:"String",
    required:true
},
message:{
    type:"String",
    required:true
}
},{timestamps:true})

const Client = mongoose.model("Client",clientSchema);
export default Client;