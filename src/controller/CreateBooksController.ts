import { Request, Response } from "express";
import { CreateBookService } from "../service/CreateBookService";


export class CreateBooksController {
    async handle(request: Request, response: Response){
        const { titulo, autor, isbn, category_id, description} = request.body

        const service = new CreateBookService();

        const result  = await service.execute({
            titulo,
            autor,
            isbn,
            category_id,
            description
        })

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}