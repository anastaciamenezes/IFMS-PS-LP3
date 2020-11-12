import { getManager } from "typeorm";
import { Produto } from "../entity/Produto";

export class ProdutoController {

    /**
     * Cadastrar um novo produto no banco de dados.
     */
    async salvar(produto: Produto){
        const produtoSalvo = await getManager().save(produto);
        return produtoSalvo;
    } 
/**
  *  async recuperarTodos() {
  *      const produtos = await getManager().find(Produto);
  *      return produtos;
  * }
  

  *  async recuperarPorId(id: number) {
  *      const produto = await getManager().findOne(Produto, id);
        return produto;
    }

    async recuperarItensDoProduto(id: number) {
        const produto = await getManager().findOne(Produto, id, {
            relations: ['itens']
        });
        return produto.itens;
    }
    **/

    /**
     * Remover o produto cujo id seja igual a id.
     */
    async delete(id: number) {
        
        const produto = await getManager().findOne(Produto, id);

        if(produto) {
            return false;
        } else {
            const deletar = await getManager().remove(produto);
            return deletar;
        }
    }
}