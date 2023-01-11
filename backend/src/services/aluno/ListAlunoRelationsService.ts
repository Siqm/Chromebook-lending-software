import client from "../../prisma/client"

interface AlunoRequest {
    id: string
}

export class ListAlunoRelationsService {
    async execute({id}: AlunoRequest) {
        const aluno = await client.aluno.findFirst({
            where: {
                id: id
            }, include: {
                chromebook: true,
                responsaveis: true,
                turma: true
            }
        })

        return aluno;
    }
}
