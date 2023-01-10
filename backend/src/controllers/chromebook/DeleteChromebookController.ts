import { Request, Response } from "express";
import { DeleteChromebookService } from "../../services/chromebook/DeleteChromebookService";

export class DeleteChromebookController {
    async handle(req: Request, res: Response) {

        const chromebookId = req.query.chromebookId as string

        const deleteChromebookService = new DeleteChromebookService();

        const chromebook = await deleteChromebookService.execute({chromebookId})

        return res.json(chromebook);

    }
}
