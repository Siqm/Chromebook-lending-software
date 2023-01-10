import client from "../../prisma/client";

export class ListResponsaveisService {
    async execute() {
        const responsaveis = await client.responsavel.findMany();

        return responsaveis;
    }
}
