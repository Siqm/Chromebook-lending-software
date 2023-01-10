import { Request, Response } from "express";
import { ListResponsaveisService } from "../../services/responsavel/ListResponsaveisService";

export class ListResponsaveisController {
    async handle(req: Request, res: Response) {

        const listResponsaveisService = new ListResponsaveisService();

        const responsaveis = await listResponsaveisService.execute();

        return res.json(responsaveis);
    }
}
