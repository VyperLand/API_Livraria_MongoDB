import ErroPaginaNaoEncontrada from "../erros/ErroPaginaNaoEncontrada.js";
import {autor} from "../models/index.js";

class AutorController {

  static async listarAutores(req, res, next){
    try {
      const listaAutores = autor.find({});

      req.resultado = listaAutores;

      next();
    } catch (error) {
      next(error);
    }
        
  }

  static async listarAutorById(req, res, next){
    try {
      const id = req.params.id;
      const nAutor = await autor.findById(id);
      if(nAutor !== null){
        res.status(200).json(nAutor);
      }else{
        next( new ErroPaginaNaoEncontrada("Id do Autor não localizado."));
      }
      
    } catch (error) {
      next(error);
    }
        
  }

  static async cadastrarAutor(req, res,next){
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json(novoAutor);
    } catch (error) {
      next(error);
    }
        
  }



  static async atualizarAutor(req, res, next){
    try {
      const id = req.params.id;
      const nAutor = await autor.findByIdAndUpdate(id,req.body);
      
      if(nAutor !== null){
        res.status(200).json(nAutor);
      }else{
        next( new ErroPaginaNaoEncontrada("Id do Autor não localizado."));
      }

    } catch (error) {
      next(error);
    }
        
  }

  static async deletarAutor(req, res, next){
    try {
      const id = req.params.id;
      const nAutor = await autor.findByIdAndDelete(id);
      
      if(nAutor !== null){
        res.status(200).json(nAutor);
      }else{
        next( new ErroPaginaNaoEncontrada("Id do Autor não localizado."));
      }
    } catch (error) {
      next(error);
    }
        
  }

}


export default AutorController;