const produto = [
  { id: 1, nome: "Amendoim", valor: 10.0, quantidade: 5 },
  { id: 2, nome: "Açúcar Refinado", valor: 20.5, quantidade: 10 },
  { id: 3, nome: "Arroz", valor: 15.0, quantidade: 8 },
  { id: 4, nome: "Feijão Preto", valor: 12.0, quantidade: 7 },
  { id: 5, nome: "Farinha de Trigo", valor: 8.5, quantidade: 12 }
];


function buscarProdutoPorId(id) {
  return produto.filter(produto => produto.id == id);
}
export { buscarProdutoPorId };
export default produto;