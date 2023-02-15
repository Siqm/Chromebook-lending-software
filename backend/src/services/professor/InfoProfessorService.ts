import client from "../../prisma/client"

interface ProfessorRequest {
    id: string,
    name: string,
    email: string
}

export class InfoProfessorService {
    async execute({name, email, id} : ProfessorRequest) {

        console.log(!!email)

        if (!name && !email) {
            const professor = await client.professor.findFirst({
                where: {
                    id
                }
            })

            console.log('id',professor)

            return professor
        }

        if(!name) {
            const professor = await client.professor.findFirst({
                where: {
                    email
                }
            })

            console.log('email',professor)

            return professor
        }

        const professor = await client.professor.findMany({
            where: {
                name: {
                    contains: 'se',
                    mode:'insensitive'
                }
            }
        })

        console.log(professor)

        return professor;
    }
}
