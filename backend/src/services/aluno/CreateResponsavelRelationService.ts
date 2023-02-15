import client from "../../prisma/client"

interface RelationRequest {
    alunoId: string,
    responsavelId: string
}

export class CreateResponsavelRelationService {

    async execute({ alunoId, responsavelId }: RelationRequest) {

        const aluno = await client.aluno.update({
            where: {
                id: alunoId
            },
            data: {
                responsaveis: {
                    connect: {
                        id: responsavelId
                    }
                }
            }
        })

        return aluno;
    }
}
