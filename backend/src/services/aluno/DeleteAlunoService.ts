import client from "../../prisma/client"

interface AlunoRequest {
    alunoId: string
}

export class DeleteAlunoService {
    async execute({alunoId}: AlunoRequest) {
        const aluno = await client.aluno.delete({
            where: {
                id: alunoId
            }
        })

        return aluno;
    }
}
