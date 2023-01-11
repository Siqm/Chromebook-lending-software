import { Request, Response } from "express";
import { CreateFullAlunoService } from "../../services/aluno/CreateFullAlunoService";

export class CreateFullAlunoController {
    async handle(req: Request, res: Response) {

        const createFullAlunoService = new CreateFullAlunoService();

        const fullAluno = await createFullAlunoService.execute(req.body)

        return res.json(fullAluno)
    }
}
