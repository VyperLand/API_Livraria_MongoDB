import express from "express";
import LivroController from "../controllers/livroController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/Livros", LivroController.listarLivros, paginar);
routes.get("/Livros/busca", LivroController.listarLivrosPorFiltro, paginar);
routes.get("/Livros/:id", LivroController.listarLivroById);
routes.post("/Livros", LivroController.cadastrarLivro);
routes.put("/Livros/:id", LivroController.atualizarLivro);
routes.delete("/Livros/:id", LivroController.deletarLivro);


export default routes;