import { Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    created_at!: Date;

    construtor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}