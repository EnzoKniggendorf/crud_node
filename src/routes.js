import express from "express";
import { consulta } from "./conexao.js";

const rotas = express.Router();

rotas.get("/", async (req, res) => {
  const produtos = await consulta("SELECT * FROM produtos");
  res.json(produtos);
});

rotas.get("/:id", async (req, res) => {
  const produtoId = await consulta("SELECT * FROM produtos WHERE id=?", req.params.id);
  res.json(produtoId);
});

rotas.post("/", async (req, res) => {
  const { nome, valor, quantidade } = req.body;
  await consulta("INSERT INTO produtos (nome, valor, quantidade) VALUES (?, ?, ?)", [nome, valor, quantidade]);
  res.json({ nome, valor, quantidade });
});

rotas.put("/:id", async (req, res) => {
  const { nome, valor, quantidade } = req.body;
  await consulta("UPDATE produtos SET nome=?, valor=?, quantidade=? WHERE id=?", [nome, valor, quantidade, req.params.id]);
  res.json({ id: req.params.id, nome, valor, quantidade });
});

rotas.delete("/:id", async (req, res) => {
  await consulta("DELETE FROM produtos WHERE id=?", req.params.id);
  res.sendStatus(204);
});

export default rotas;