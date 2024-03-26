// A4gbPjKaAoebsxs1
//abhiramakv
import mongoose from "mongoose"

// mongodb+srv://abhiramakv:A4gbPjKaAoebsxs1@cluster0.0vukufl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://abhiramakv:<password>@cluster0.0vukufl.mongodb.net/
const Connection = ()=>{
    try{
        mongoose.connect("mongodb+srv://abhiramakv:A4gbPjKaAoebsxs1@cluster0.0vukufl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{ useNewUrlParser: true })
        console.log('connected to database')
    }catch{
        console.log('not connected to database')
    }
}

export default Connection;