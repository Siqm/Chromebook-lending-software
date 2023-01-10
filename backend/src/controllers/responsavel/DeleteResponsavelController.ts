import { Request, Response } from "express";
import { DeleteResponsavelService } from "../../services/responsavel/DeleteResponsavelService";

export class DeleteResponsavelController{
    async handle(req: Request, res: Response) {

        const responsavelId = req.query.responsavelId as string

        const deleteResponsavelService = new DeleteResponsavelService();

        const responsavel = await deleteResponsavelService
            .execute({responsavelId})

        return res.json(responsavel)
    }
}
