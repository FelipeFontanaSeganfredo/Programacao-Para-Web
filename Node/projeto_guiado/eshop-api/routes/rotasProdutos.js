const { Router } = require('express');
const {
    getProdutos, getProdutoPorCodigo, addProduto, updateProduto, deleteProduto
} = require('../controllers/produtoController');

const rotasProdutos = new Router();

rotasProdutos.route('/produto')
    .get(getProdutos)
    .post(addProduto)
    .put(updateProduto);

rotasProdutos.route('/produto/:codigo')
    .get(getProdutoPorCodigo)
    .delete(deleteProduto);

module.exports = { rotasProdutos };
