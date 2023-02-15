import { Request, Response } from "express";
import { InfoProfessorService } from "../../services/professor/InfoProfessorService";

export class InfoProfessorController {
    async handle(req: Request, res: Response) {

        const infoProfessorService = new InfoProfessorService();

        const professor = await infoProfessorService.execute(req.body);

        return res.json(professor);
    }
}
