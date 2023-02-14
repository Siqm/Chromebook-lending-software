import { Request, Response } from "express";
import { InfoAlunoService } from "../../services/aluno/InfoAlunoService";

export class InfoAlunoController{
    async handle(req: Request, res: Response) {

        const infoAlunoService = new InfoAlunoService();

        const aluno = await infoAlunoService.execute(req.body)

        return res.json(aluno);
    }
}
