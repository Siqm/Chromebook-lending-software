import { Request, Response } from "express";
import { CreateResponsavelService } from "../../services/responsavel/CreateResponsavelService";

export class CreateResponsavelController {
    async handle(req: Request, res: Response) {

        const createResponsavelService = new CreateResponsavelService();

        const responsavel = await createResponsavelService.execute(req.body);

        return res.json(responsavel)
    }
}
