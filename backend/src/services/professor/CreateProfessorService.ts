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
