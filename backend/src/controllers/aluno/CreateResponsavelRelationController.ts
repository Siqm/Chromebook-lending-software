import { Request, Response } from "express";
import { CreateResponsavelRelationService } from "../../services/aluno/CreateResponsavelRelationService";

export class CreateResponsavelRelationController {
    async handle(req: Request, res: Response) {

        const createResponsavelRelationService = new CreateResponsavelRelationService();

        const aluno = await createResponsavelRelationService.execute(req.body);

        return res.json(aluno)
    }
}
