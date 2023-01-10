import { Request, Response } from "express";
import { DeleteAlunoService } from "../../services/aluno/DeleteAlunoService";

export class DeleteAlunoController {
    async handle(req: Request, res: Response) {
        const alunoId = req.query.alunoId as string

        const deleteAlunoService = new DeleteAlunoService();

        const aluno = await deleteAlunoService.execute({alunoId})

        return res.json(aluno);
    }
}
