import { Request, Response } from "express";
import { ListTurmaService } from "../../services/turma/ListTurmaService";

export class ListTurmaController {

    async handle(req: Request, res: Response) {

        const listTurmaService = new ListTurmaService();

        const turmas = await listTurmaService.execute()

        return res.json(turmas);
    }
}
