import ErroBase from "./ErroBase.js";

class ErroPaginaNaoEncontrada extends ErroBase{
  constructor(mensagem = "Pagina não encontrada"){
    super(mensagem, 404);
  }
}

export default ErroPaginaNaoEncontrada;