import client from "../../prisma/client";

interface AlunoRequest {
    id?: string,
    name?: string,
    email?: string,
}

export class InfoAlunoService {
    async execute({name, email, id}: AlunoRequest) {

        const aluno = await client.aluno.findMany({
            where: {
                OR: [
                    {
                        id
                    },
                    {
                        email
                    },
                    {
                        name: {
                            contains: name,
                            mode: 'insensitive'
                        }
                    }
                ],
            },
            include: {
                chromebook: true,
                responsaveis: true
            }
        })

        return aluno;
    }
}
