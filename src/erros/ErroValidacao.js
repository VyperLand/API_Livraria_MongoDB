import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    //Posso fazer dos dois jeitos, iterando sobre o objeto e juntando as menssagens de erro separando pelo campo que quero, ou passando direto
    //const mensagensErro = Object.values(erro.errors).map(erro => erro.message).join("; ");
    super(`Erro de validação de dados - ${erro.message}`);
  }
}

export default ErroValidacao;