import { Produto } from '../entity/Produto';
import { Router } from 'express';
import { ProdutoController } from '../controller/ProdutoController';
import {getConnection} from "typeorm";

export const routerProduto = Router();
const produtoCtrl = new ProdutoController();

/**
 * Serviço pra salvar um novo produto
 */
routerProduto.post('/', async (req, res) => {
   const { descricao, perecivel } = req.body;
   const produto = new Produto(idproduto, descricao, perecivel);
   const produtoSalvo = await produtoCtrl.salvar(produto);
   res.json(produtoSalvo);
});

/**
 * Serviço para recuperar todos os produtos
 
routerProduto.get('/', async (req, res) => {
    const produtos = await produtoCtrl.recuperarTodos();
    res.json(produtos);
});
*/

/**
 * Serviço para recuperar os itens de um determinado produto
 
routerProduto.get('/itens/:idProduto', async (req, res) => {
   const idProduto = parseInt(req.params.idProduto);
   const itens = await produtoCtrl.recuperarItensDoProduto(idProduto);
   res.json(itens);
*/ 
/**
 * Remover o produto cujo id igual a id 
  */ 
 routerProduto.put('/itens/:idProduto', async (req, res) => {
   await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Produto)
    .where("id = :id", { id: 1 })
    .execute();
});

 