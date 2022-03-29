import { getRepository } from "typeorm";
import { Books } from "../entities/Books";
import { Category } from "../entities/Category";

type BooksRequest = {
    titulo: string;
    autor: string;
    isbn: string;
    description: string;
    category_id: string;
}

export class CreateBookService {
    async execute({titulo, autor, isbn, description, category_id}: BooksRequest): Promise<Error | Books>{
        const repo = getRepository(Books)
        const repoCategory = getRepository(Category)

        if(!await repoCategory.findOne(category_id)) {
            return new Error("category does not exists!")
        }

        const books = repo.create({titulo, autor, isbn, description, category_id})

        await repo.save(books)

        return books
    }
}