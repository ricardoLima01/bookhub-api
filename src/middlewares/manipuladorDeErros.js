import mongoose from "mongoose";
import ErrosBase from "../erros/ErrosBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

function manipuladorDeErros(erro, req, res, next){
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res)
    }else if(erro instanceof mongoose.Error.ValidationError){
        new ErroValidacao(erro).enviarResposta(res)
    }else if(erro instanceof ErrosBase){
        erro.enviarResposta(res)
    }else { 
        new ErrosBase().enviarResposta(res)
    }
}

export default manipuladorDeErros