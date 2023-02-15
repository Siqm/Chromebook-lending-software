import client from "../../prisma/client"

interface ProfessorRequest {
    id: string,
    name: string,
    email: string
}

export class InfoProfessorService {
    async execute({name, email, id} : ProfessorRequest) {

        // if (id) {
        //     const professor = await client.professor.findFirst({
        //         where: {
        //             id
        //         },
        //         include: {
        //             chromebook: true
        //         }
        //     })

        //     console.log('id',professor)

        //     return professor
        // }

        // if(email) {
        //     const professor = await client.professor.findFirst({
        //         where: {
        //             email, OR: {name}
        //         },
        //         include: {
        //             chromebook: true
        //         }
        //     })

        //     console.log('email',professor)

        //     return professor
        // }

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
