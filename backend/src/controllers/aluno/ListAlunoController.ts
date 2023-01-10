import { Request, Response } from "express";
import { ListAlunoService } from "../../services/aluno/listAlunoService";

export class ListAlunoController {
    async handle(req: Request, res: Response) {

        const listAlunoService = new ListAlunoService();

        const alunos = await listAlunoService.execute();

        return res.json(alunos);
    }
}
