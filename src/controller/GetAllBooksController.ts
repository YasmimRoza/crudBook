import { Request, Response } from "express";
import { GetAllBooksService } from "../service/GetAllBooksService";


export class GetAllBooksController {
    async handle(request: Request, response: Response){
        const service = new GetAllBooksService();

        const books = await service.execute();

        return response.json(books)
    }
}