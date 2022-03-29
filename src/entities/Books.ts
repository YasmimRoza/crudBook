import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Category } from "./Category"
import { v4 as uuid } from "uuid"

@Entity('books')
export class Books {
    @PrimaryGeneratedColumn('uuid')
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