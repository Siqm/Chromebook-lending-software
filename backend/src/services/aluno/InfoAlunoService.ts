import client from "../../prisma/client";

interface RequestAluno {
    id: string,
    name: string,
    email: string,
}

export class InfoAlunoService {
    async execute({id, name, email}: RequestAluno) {

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
                            mode:'insensitive'
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
