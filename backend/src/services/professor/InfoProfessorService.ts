import client from "../../prisma/client"

interface ProfessorRequest {
    id: string,
    name: string,
    email: string
}

export class InfoProfessorService {
    async execute({name, email, id} : ProfessorRequest) {

        const professor = await client.professor.findMany({
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
                chromebook: true
            }
        })

        return professor;
    }
}
