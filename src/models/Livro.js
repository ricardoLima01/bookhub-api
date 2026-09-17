import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    preco: { type: Number, required: true },
    genero: { type: String, required: true }
}, { versionKey: false })

const livro = mongoose.model("livros", LivroSchema)
export default livro