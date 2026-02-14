import express from "express";
import produto from "./produto.js";
import { buscarProdutoPorId } from "./produto.js";

const app = express();

app.get("/", (req, res) => {
  res.send("CR7 o melhor de todos os tempos");
});

app.get("/produto", (req, res) => {
  res.json(produto);
});

app.get("/produto/:id", (req, res) => {
  res.json(buscarProdutoPorId(req.params.id));
});

app.use(express.json());

export default app;
