const {
    getProdutosDB, getProdutoPorCodigoDB, addProdutoDB, updateProdutoDB, deleteProdutoDB
} = require('../usecases/produtoUseCases');

const getProdutos = async (req, res) => {
    await getProdutosDB()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ status: 'error', message: err }));
};

const getProdutoPorCodigo = async (req, res) => {
    await getProdutoPorCodigoDB(parseInt(req.params.codigo))
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ status: 'error', message: err }));
};

const addProduto = async (req, res) => {
    await addProdutoDB(req.body)
        .then(data => res.status(200).json({ status: "success", message: "Produto cadastrado", objeto: data }))
        .catch(err => res.status(400).json({ status: 'error', message: err }));
};

const updateProduto = async (req, res) => {
    await updateProdutoDB(req.body)
        .then(data => res.status(200).json({ status: "success", message: "Produto atualizado", objeto: data }))
        .catch(err => res.status(400).json({ status: 'error', message: err }));
};

const deleteProduto = async (req, res) => {
    await deleteProdutoDB(parseInt(req.params.codigo))
        .then(data => res.status(200).json({ status: "success", message: data }))
        .catch(err => res.status(400).json({ status: 'error', message: err }));
};

module.exports = {
    getProdutos,
    getProdutoPorCodigo,
    addProduto,
    updateProduto,
    deleteProduto
};
