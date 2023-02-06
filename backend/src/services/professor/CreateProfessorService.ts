import client from "../../prisma/client"

interface ProfessorRequest {
    name: string,
    email: string,
    chromebookSerial: string
}

export class CreateProfessorService {
    async execute ({name, email, chromebookSerial}: ProfessorRequest) {
        if(!chromebookSerial) {
            const professor = await client.professor.create({
                data : {
                    name,
                    email
                }
            })

            return professor
        }

        const isOnAluno = await client.aluno.findFirst({
            where: {
                chromebook: {
                    serial: chromebookSerial
                }
            }
        })

        const isOnProfessor = await client.professor.findFirst({
            where: {
                chromebook: {
                    serial: chromebookSerial
                }
            }
        })

        if (isOnAluno || isOnProfessor) {
            throw new Error('A relação já existe')
        }

        const professor = await client.professor.create ({
            data:{
                name,
                email,
                chromebook: {
                    connectOrCreate: {
                        where: {
                            serial: chromebookSerial
                        },
                        create: {
                            serial: chromebookSerial
                        }

                    }
                }
            }
        })

        return professor
    }

}
