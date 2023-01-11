import { Request, Response } from "express";
import { ListAlunoRelationsService } from "../../services/aluno/ListAlunoRelationsService";

export class ListAlunoRelationsController {
    async handle(req: Request, res: Response) {

        const {alunoId} = req.body;

        const listAlunoRelationsService = new ListAlunoRelationsService();

        const aluno = await listAlunoRelationsService.execute(alunoId)

        return res.json(aluno);
    }
}
