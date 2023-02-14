import client from "../../prisma/client";

interface RequestAluno {
    alunoId: string,
    alunoName: string,
    alunoEmail: string,
}

export class InfoAlunoService {
    async execute({alunoId, alunoName, alunoEmail}: RequestAluno) {

        if (alunoId) {

            const aluno = await client.aluno.findUnique({
                where: {
                    id: alunoId
                }
            })

            return aluno;
        }

        if (alunoName) {

            const aluno = await client.aluno.findMany({
                where: {
                    name: {
                        contains: alunoName,
                        mode: 'insensitive'
                    }
                }
            })

            return aluno;
        }

        if (alunoEmail) {

            const aluno = await client.aluno.findUnique({
                where: {
                    email: alunoEmail
                }
            })

            return aluno;
        }
    }
}
