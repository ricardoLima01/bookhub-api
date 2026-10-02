import NaoEncontrado from "../erros/NaoEncontrado.js"
import { autor } from "../models/Autor.js"

class AutorController {
    static async cadastrarAutor(req, res, next){
        try{
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Autor criado com sucesso!", autor: novoAutor  })
        }catch(erro){
            next(erro)
        }
    }

    static async listarAutores(req, res, next){
        try{
            const buscaAutor = autor.find()
            req.resultado = buscaAutor
            next()
        }catch(erro){ 
            next(erro)
        }
    }

    static async listarAutoresPorId(req, res, next){
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            
            if (autorEncontrado !== null){
                res.status(200).json({ Autor: autorEncontrado })
            }else{
                next(new NaoEncontrado("Id do Autor não encontrado!"))
            }
        }catch(erro){    
            next(erro)
        }
    }
    
    static async atualizarAutor(req, res, next){
        try{
            const id = req.params.id
            const campoAtualizado = req.body    
            const autorEncontrado = await autor.findByIdAndUpdate(id, campoAtualizado)

            if (autorEncontrado !== null){
                res.status(200).json({ message: "Autor atualizado com sucesso" })
            }else{
                next(new NaoEncontrado("Id do Autor não encontrado!"))
            }
        }catch(erro){
            next(erro)
        }
    }

    static async excluirAutor(req, res, next){
        try{    
            const id = req.params.id    
            const autorEncontrado = await autor.findByIdAndDelete(id)

            if (autorEncontrado !== null){
                res.status(200).json({ message: "Autor excluido com sucesso" })
            }else{
                next(new NaoEncontrado("Id do Autor não encontrado!"))
            }
        }catch(erro){
            next(erro)
        }
    }
}

export default AutorController