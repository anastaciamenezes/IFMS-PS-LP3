import { Produto } from './Produto';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {

    constructor(id: number, quantidade: number, dataChegadaNoEstoque: Date, produto: Produto) {
        this.id = id;
        this.quantidade = quantidade;
        this.dataChegadaNoEstoque = dataChegadaNoEstoque;
        this.produto = produto;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: number;

    @Column()
    dataChegadaNoEstoque: Date;

    @ManyToOne(() => Produto)
    produto: Produto;
}
