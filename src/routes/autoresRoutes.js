import express from "express";
import AutorController from "../controllers/autorController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/Autor", AutorController.listarAutores, paginar);
routes.get("/Autor/:id", AutorController.listarAutorById);
routes.post("/Autor", AutorController.cadastrarAutor);
routes.put("/Autor/:id", AutorController.atualizarAutor);
routes.delete("/Autor/:id", AutorController.deletarAutor);


export default routes;