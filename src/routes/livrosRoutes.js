import express from "express"
import LivroController from "../controllers/livroController.js"

const routes = express.Router()

routes.post("/cadastrar-livro", LivroController.cadastrarLivro)
routes.get("/livros", LivroController.listarLivros)
routes.get("/livro/:id", LivroController.listarLivroPorId)
routes.put("/atualizar-livro/:id", LivroController.atualizarLivro)
routes.delete("/excluir-livro/:id", LivroController.excluirLivro)

export default routes