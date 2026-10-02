import ErrosBase from "./ErrosBase.js";

class RequisicaoIncorreta extends ErrosBase{
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos"){
        super(mensagem, 400)
    }
}

export default RequisicaoIncorreta