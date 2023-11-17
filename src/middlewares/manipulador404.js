import ErroPaginaNaoEncontrada from "../erros/ErroPaginaNaoEncontrada.js";

export default function manipulador404(req, res, next){
  const erro404 = new ErroPaginaNaoEncontrada();
  next(erro404);
}