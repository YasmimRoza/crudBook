import { response } from "express";
import { getRepository } from "typeorm";
import { Books } from "../entities/Books";


export class GetAllBooksService{
    async execute(){
        const repo = getRepository(Books);
        
        const books = await repo.find({
            relations: ["category"]
        })

        return books;
    }
}