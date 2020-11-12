import { ProdutoController } from '../controller/ProdutoController';
import { ItemController } from '../controller/ItemController';
import { Router } from 'express';
import { Produto } from '../entity/Produto';
import { Item } from '../entity/Item';

export const routerItem = Router();
const itemCtrl = new ItemController();
const produtoCtrl = new ProdutoController();

/**
 * Serviço para cadastrar um novo Item
 */

 routerItem.post('/', async (req, res) => {
    const { quantidade, dataChegadaNoEstoque} = req.body;
    const item = new Item(idItem, quantidade, dataChegadaNoEstoque, Produto);
    const itemSalvo = await itemCtrl.salvar(item);
        res.json(itemSalvo);
    } 
);