import client from "../../prisma/client";

interface ResponsavelRequest {
    responsavelId: string
}

export class DeleteResponsavelService {
    async execute({responsavelId}: ResponsavelRequest) {
        const responsavel = await client.responsavel.delete({
            where: {
                id: responsavelId
            }
        })

        return responsavel;
    }
}
