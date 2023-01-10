import { Request, Response } from "express";
import { CreateChromebookService } from "../../services/chromebook/CreateChromebookService";

export class CreateChromebookController {
    async handle(req: Request, res: Response) {

        const createChromebookService = new CreateChromebookService();

        const chromebook = await createChromebookService.execute(req.body);

        return res.json(chromebook)
    }
}
