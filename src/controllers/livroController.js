import ErroPaginaNaoEncontrada from "../erros/ErroPaginaNaoEncontrada.js";
import {autor, livro } from "../models/index.js";


class LivroController {

  static async listarLivros(req, res, next){
    try {
      const buscaLivros = livro.find().populate("autor");

      req.resultado = buscaLivros;

      next();
      
    } catch (error) {
      next(error);
    }
        
  }

  static async listarLivroById(req, res, next){
    try {
      const id = req.params.id;
      const nlivro = await livro.findById(id);

      if(nlivro !== null){
        res.status(200).json(nlivro);
      }else{
        next(new ErroPaginaNaoEncontrada("Id do livro não localizado."));
      }
    } catch (error) {
      next(error);
    }
        
  }

  static async cadastrarLivro(req, res, next){
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json(novoLivro);
    } catch (error) {
      next(error);
    }
        
  }



  static async atualizarLivro(req, res, next){
    try {
      const id = req.params.id;
      const nlivro = await livro.findByIdAndUpdate(id,req.body);

      if(nlivro !== null){
        res.status(200).json(nlivro);
      }else{
        next(new ErroPaginaNaoEncontrada("Id do livro não localizado."));
      }
    } catch (error) {
      next(error);
    }
        
  }

  static async deletarLivro(req, res, next){
    try {
      const id = req.params.id;
      const nlivro = await livro.findByIdAndDelete(id);

      if(nlivro !== null){
        res.status(200).json(nlivro);
      }else{
        next(new ErroPaginaNaoEncontrada("Id do livro não localizado."));
      }
      
    } catch (error) {
      next(error);
    }
        
  }

  static async listarLivrosPorFiltro(req,res, next){
    try {

      const {editora, titulo, nomeAutor} = req.query;

      let busca = {};


      if(editora) busca.editora = editora;

      //--------------------------------------------

      //* Com JS puro usando REGEX */
      //const regex = new RegExp(titulo,"i");
      //if(titulo) busca.titulo = regex;

      /* Com recursos do mongoose */
      if(titulo) busca.titulo = { $regex: titulo, $options: "i" };

      //---------------------------------------------

      if(nomeAutor){
        const nAutor = await autor.findOne({nome: nomeAutor});

        if(nAutor !== null){
          busca.autor = nAutor._id;
        }else{
          busca = null;
        }
        
      }

      if(busca !== null){
        const livrosResultado = livro.find(busca).populate("autor");
        req.resultado = livrosResultado;

        next();
      }else{
        res.status(200).send([]);
      }
      
    } catch (error) {
      next(error);
    }
  }

}


export default LivroController;