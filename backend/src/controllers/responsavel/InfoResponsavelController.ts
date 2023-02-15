import { Request, Response } from "express";
import { InfoResponsavelService } from "../../services/responsavel/InfoResponsavelService";

export class InfoResponsavelController {
    async handle(req: Request, res: Response) {

        const infoResponsavelService = new InfoResponsavelService();

        const responsavel = await infoResponsavelService.execute(req.body)

        return res.json(responsavel)
    }
}
