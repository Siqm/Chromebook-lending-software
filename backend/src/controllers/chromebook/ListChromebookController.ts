import { Request, Response } from "express";
import { ListChromebookService } from "../../services/chromebook/ListChromebookService";

export class ListChromebookController {

    async handle(req: Request, res: Response) {

        const listChromebookService = new ListChromebookService();

        const chromebooks = await listChromebookService.execute();

        return res.json(chromebooks)
    }
}
