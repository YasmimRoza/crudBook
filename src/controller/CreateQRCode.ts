import QRCode from 'qrcode'
import { Request, Response } from 'express'
import { GetOneBookService } from '../service/GetOneBookService';
import { Books } from '../entities/Books';
import { stringify } from 'uuid';


export class CreateQRCode {
    async handle(req: Request, res: Response){
        const {id} = req.params;

        const service = new GetOneBookService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return res.status(400).json(result.message)
        }

        const string = JSON.stringify(`${result?.titulo}` +" : "+`${result?.id}`)

        QRCode.toDataURL(string, {
            color: {
                dark: '#800000',
                light: '#0000'
            },
            version: 10, scale: 10, margin: 6, width: 400, type: 'image/jpeg'
        },function(err, code){
            if (err) console.log('error' + err)
            return res.send("<!DOCTYPE html/><html><head><title>node-qrcode</title></head><body><img src='" + code + "'/></body></html>")
        })
    }
}

