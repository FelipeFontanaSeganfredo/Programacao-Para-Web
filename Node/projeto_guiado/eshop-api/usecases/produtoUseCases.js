const { pool } = require('../config');
const Produto = require('../entities/produto');

const getProdutosDB = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM produtos ORDER BY nome');
        return rows.map((p) => new Produto(
            p.codigo, p.nome, p.descricao, p.quantidade_estoque,
            p.ativo, p.valor, p.data_cadastro, p.categoria
        ));
    } catch (err) {
        throw "Erro ao obter produtos: " + err;
    }
};

const getProdutoPorCodigoDB = async (codigo) => {
    try {
        const { rows, rowCount } = await pool.query('SELECT * FROM produtos WHERE codigo = $1', [codigo]);
        if (rowCount === 0) throw `Produto ${codigo} não encontrado.`;
        const p = rows[0];
        return new Produto(p.codigo, p.nome, p.descricao, p.quantidade_estoque, p.ativo, p.valor, p.data_cadastro, p.categoria);
    } catch (err) {
        throw "Erro ao obter produto: " + err;
    }
};

const addProdutoDB = async (body) => {
    const { nome, descricao, quantidade_estoque, ativo, valor, data_cadastro, categoria } = body;
    try {
        const { rows } = await pool.query(`
            INSERT INTO produtos (nome, descricao, quantidade_estoque, ativo, valor, data_cadastro, categoria)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [nome, descricao, quantidade_estoque, ativo, valor, data_cadastro, categoria]);
        const p = rows[0];
        return new Produto(p.codigo, p.nome, p.descricao, p.quantidade_estoque, p.ativo, p.valor, p.data_cadastro, p.categoria);
    } catch (err) {
        throw "Erro ao inserir produto: " + err;
    }
};

const updateProdutoDB = async (body) => {
    const { codigo, nome, descricao, quantidade_estoque, ativo, valor, data_cadastro, categoria } = body;
    try {
        const { rows, rowCount } = await pool.query(`
            UPDATE produtos SET nome = $2, descricao = $3, quantidade_estoque = $4, ativo = $5,
            valor = $6, data_cadastro = $7, categoria = $8 WHERE codigo = $1 RETURNING *`,
            [codigo, nome, descricao, quantidade_estoque, ativo, valor, data_cadastro, categoria]);
        if (rowCount === 0) throw `Produto ${codigo} não encontrado para alteração.`;
        const p = rows[0];
        return new Produto(p.codigo, p.nome, p.descricao, p.quantidade_estoque, p.ativo, p.valor, p.data_cadastro, p.categoria);
    } catch (err) {
        throw "Erro ao atualizar produto: " + err;
    }
};

const deleteProdutoDB = async (codigo) => {
    try {
        const result = await pool.query('DELETE FROM produtos WHERE codigo = $1', [codigo]);
        if (result.rowCount === 0) throw `Produto ${codigo} não encontrado para exclusão.`;
        return "Produto removido com sucesso";
    } catch (err) {
        throw "Erro ao remover produto: " + err;
    }
};

module.exports = {
    getProdutosDB,
    getProdutoPorCodigoDB,
    addProdutoDB,
    updateProdutoDB,
    deleteProdutoDB
};
