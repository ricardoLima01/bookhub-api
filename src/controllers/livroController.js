import livro from "../models/Livro.js"
import { autor } from "../models/Autor.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class LivroController {
    static async cadastrarLivro(req, res, next){
        const novoLivro = req.body
        try{
            let livroCompleto = { ...novoLivro }

            if(novoLivro.autor){
                const autorEncontrado = await autor.findById(novoLivro.autor)

                if(autorEncontrado === null){
                    next(new NaoEncontrado("Id do Autor não encontrado!"))
                    return
                }
                livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc} }
            }
            
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Livro criado com sucesso!", livro: livroCriado });
        }catch(erro){
            next(erro)
        }
    }

    static async listarLivros(req, res, next){
        try{
            const buscaLivro = livro.find()
            req.resultado = buscaLivro
            next()
        }catch(erro){ 
            next(erro)
        }
    }

    static async listarLivroPorId(req, res, next){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)

            if (livroEncontrado !== null){
               res.status(200).json({ Livro: livroEncontrado })
            }else{
                next(new NaoEncontrado("Id do Livro não encontrado!"))
            }
        }catch(erro){    
            next(erro)
        }
    }

    static async listarLivroPorFiltro(req, res, next){
        try{
            const busca = processaBusca(req.query) 
            const livrosResultado = livro.find(busca)
            
            req.resultado = livrosResultado
            next()
        }catch(erro){
            next(erro)
        }
    }
    
    static async atualizarLivro(req, res, next){
        try{
            const id = req.params.id
            const campoAtualizado = req.body    
            const livroEncontrado = await livro.findByIdAndUpdate(id, campoAtualizado)
            if (livroEncontrado !== null){
               res.status(200).json({ message: "Livro atualizado com sucesso" })
            }else{
                next(new NaoEncontrado("Id do Livro não encontrado!"))
            }
        }catch(erro){
            next(erro)
        }
    }

    static async excluirLivro(req, res, next){
        try{    
            const id = req.params.id    
            const livroEncontrado = await livro.findByIdAndDelete(id)
            if (livroEncontrado !== null){
               res.status(200).json({ message: "Livro excluido com sucesso" })
            }else{
                next(new NaoEncontrado("Id do Livro não encontrado!"))
            }
        }catch(erro){
            next(erro)
        }
    }
}

function processaBusca(parametros) {
    const { titulo, genero, minPreco, maxPreco, nomeAutor } = parametros

    const busca = {}

    if(titulo) busca.titulo = { $regex: titulo, $options: "i" }
    if(genero) busca.genero = genero
    if(minPreco || maxPreco) busca.preco = {}

    if(minPreco) busca.preco.$gte = minPreco
    if(maxPreco) busca.preco.$lte = maxPreco

    if(nomeAutor) {
        busca["autor.nome"] = { $regex: nomeAutor, $options: "i" };
    }

    return busca
}

export default LivroController