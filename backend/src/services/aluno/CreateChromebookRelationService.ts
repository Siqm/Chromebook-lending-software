import client from "../../prisma/client"

interface RelationRequest {
    serial: string,
    alunoId: string
}
export class CreateChromebookRelationService {
    async execute({serial, alunoId}: RelationRequest) {

        const alunoWithChromebook = await client.aluno.update({
            where: {
                id: alunoId
            },
            data: {
                chromebook: {
                    connect: {
                        serial
                    }
                }
            }
        })

        return alunoWithChromebook
    }
}
