import { getRepository } from "typeorm";
import { Books } from "../entities/Books";

export class GetOneBookService {
    async execute(id: string){
        const repo = getRepository(Books);

        const book = await repo.findOne(id);

        if (!(await repo.findOne(id))) {
            return new Error("Category does not exists");
        }

        return book
    }
}