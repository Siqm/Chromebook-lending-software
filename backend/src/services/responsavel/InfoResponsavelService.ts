import client from "../../prisma/client"

interface ResponsavelRequest {
    id: string,
    name: string,
    email: string
}

export class InfoResponsavelService{
    async execute({id, name, email}: ResponsavelRequest) {

        const responsavel = await client.responsavel.findMany({
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
                alunos: {
                    include: {
                        chromebook: true
                    }
                }
            }
        })

        return responsavel;
    }
}
