import { Request, Response } from "express";
import { CreateTurmaService } from "../../services/turma/CreateTurmaService";

export class CreateTurmaController {
    async handle(req: Request, res: Response) {

        const createTurmaService = new CreateTurmaService();

        const turma = await createTurmaService.execute(req.body);

        return res.json(turma)
    }
}
