import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Item } from "./Item";

@Entity()
export class Produto {

    constructor(id: number, descricao: string, perecivel: boolean) {
       this.descricao = descricao;
       this.perecivel = perecivel;
       
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column({ type: 'boolean' })
    perecivel: boolean = false;

    @OneToMany(() => Item, item => item.produto)
    itens: Item[];

}
