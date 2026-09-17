import livro from "../models/Livro.js"

class LivroController {
    static async cadastrarLivro(req, res){
        try{
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "Livro criado com sucesso!", livro: novoLivro  })
        }catch(err){
            res.status(500).json({ message: `${err.message} - Falha ao cadastrar livro` });
        }
    }

    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({})
            res.status(200).json({ livros: listaLivros })
        }catch(err){ 
            res.status(500).json({ message: `${err.message} - Falha no servidor` });
        }
    }

        static async listarLivroPorId(req, res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json({ livro: livroEncontrado })
        }catch(err){    
            res.status(500).json({ message: `${err.message} - Livro não encontrado!` });
        }
    }
    
    static async atualizarLivro(req, res) {
        try{
            const id = req.params.id
            const campoAtualizado = req.body    
            await livro.findByIdAndUpdate(id, campoAtualizado)
            res.status(200).json({ message: "Livro atualizado com sucesso" })
        }catch(err){
            res.status(500).json({ message: `${err.message} - Livro não encontrado!` });
        }
    }

    static async excluirLivro(req, res) {
        try{    
            const id = req.params.id    
            await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "Livro excluido com sucesso" })
        }catch(err){
            res.status(500).json({ message: `${err.message} - Livro não encontrado!` });
        }
    }
}

export default LivroController