import { Request, Response } from "express";
import { ListProfessorService } from "../../services/professor/ListProfessorService";


export class ListProfessorController {
    async handle(req: Request, res: Response) {

        const listProfessorSerice = new ListProfessorService()

        const professores = await listProfessorSerice.execute()

        return res.json(professores)
    }
}
