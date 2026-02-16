import express from "express";
import rotas from "./routes.js";
import { registro, login } from "./auth.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CR7 o melhor de todos os tempos");
});

app.post("/registro", registro);
app.post("/login", login);

app.use("/produto", rotas);

export default app;