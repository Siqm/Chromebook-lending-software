import { Request, Response } from "express";
import { errorHandler } from "../../middlewares/errorMiddleware";
import { CreateProfessorService } from "../../services/professor/CreateProfessorService";

export class CreateProfessorController {
    async handle(req: Request, res: Response) {

        const createProfessorService = new CreateProfessorService()

        const professor = await createProfessorService.execute(req.body)

        return res.json(professor)
    }
}
