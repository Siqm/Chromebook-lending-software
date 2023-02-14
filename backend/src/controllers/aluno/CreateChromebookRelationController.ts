import { Request, Response } from "express";
import { CreateChromebookRelationService } from "../../services/aluno/CreateChromebookRelationService";

export class CreateChromebookRelationController {
    async handle(req: Request, res: Response) {

        const createChromebookRelationService = new CreateChromebookRelationService();

        const aluno = await createChromebookRelationService.execute(req.body);

        return res.json(aluno)
    }
}
