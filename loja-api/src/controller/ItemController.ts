import { getManager } from 'typeorm';
import { Item } from "../entity/Item";

export class ItemController {

    async salvar(item: Item) {
        const itemSalvo = await getManager().save(item);
        return itemSalvo;
    }

    async alterarPorId(id: number) {
        const itens = await getManager().findOne(Item, id, {
            relations: ['itens']
        });
        return Item;
    }
        
}