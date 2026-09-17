import mongoose from "mongoose"

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Conectado ao MongoDB!")
    }catch(err){
        console.log("Falha na conexão com o MongoDB", err)
    }
} 

export default connectDB   