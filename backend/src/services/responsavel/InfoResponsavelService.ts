import client from "../../prisma/client"

interface ResponsavelRequest {
    id: string,
    name: string,
    email: string
}

export class InfoResponsavelService{
    async execute({id, name, email}: ResponsavelRequest) {

        if(!id || !name) {
            const responsavel = await client.responsavel.findFirst({
                where: {
                    email: {
                        contains: email,
                        mode: "insensitive"
                    }
                },
                include: {
                    alunos: {
                        include: {
                            chromebook: true
                        }
                    }
                }
            })

            return responsavel
        }

        if (!name) {
            const responsavel = await client.responsavel.findFirst({
                where: {
                    id
                }
            })

            return responsavel
        }

        const responsavel = await client.responsavel.findFirst({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            }
        })

        return responsavel
    }
}
