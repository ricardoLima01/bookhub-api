import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    titulo: { type: String, required: [true, "O titulo do livro é obrigatório"] },
    preco: { type: Number, required: [true, "O preço do livro é obrigatório"] },
    genero: { type: String, required: [true, "O genêro do livro é obrigatório"] },
    autor: autorSchema
}, { versionKey: false })

const livro = mongoose.model("livros", livroSchema)
export default livro