import express from "express";
import rotas from "./routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CR7 o melhor de todos os tempos");
});

app.use("/produto", rotas);

export default app;