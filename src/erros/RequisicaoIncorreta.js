import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase{
  constructor(mensagem = "Um mais dados fornecidos estão incorretos."){
    super(mensagem, 400);
  }
}

export default RequisicaoIncorreta;