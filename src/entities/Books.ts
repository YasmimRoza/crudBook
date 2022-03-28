import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm"
import { Category } from "./Category"
import { v4 as uuid } from "uuid"

@Entity('books')
export class Books {
    @PrimaryColumn()
    id!: string;

    @Column()
    titulo!: string;

    @Column()
    autor!: string;

    @Column()
    isbn!: string;

    @Column()
    description!: string;

    @Column()
    category_id!: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id"})
    category!: Category;

    @CreateDateColumn()
    created_at!: Date;

    construtor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}