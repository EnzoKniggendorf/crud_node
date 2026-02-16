import jwt from "jsonwebtoken";
import { consulta } from "./conexao.js";

export const registro = async (req, res) => {
  const { nome, email, senha } = req.body;
  await consulta("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha]);
  res.send("Usuario criado");
};

export const login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await consulta("SELECT * FROM usuarios WHERE email=?", email);
  
  if (!user[0]) return res.json({ erro: "Usuario nao encontrado" });
  if (user[0].senha != senha) return res.json({ erro: "Senha errada" });
  
  const token = jwt.sign({ id: user[0].id }, "chave123");
  res.json({ token });
};

export const verifica = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.json({ erro: "Sem token" });
  jwt.verify(token, "chave123");
  next();
};