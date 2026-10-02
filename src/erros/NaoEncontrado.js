import ErrosBase from "./ErrosBase.js";

class NaoEncontrado extends ErrosBase{
    constructor(mensagem = "Página não encontrada!"){
        super(mensagem, 404)
    }
}

export default NaoEncontrado