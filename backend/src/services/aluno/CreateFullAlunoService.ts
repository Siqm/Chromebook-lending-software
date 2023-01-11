import { Aluno } from "@prisma/client"
import client from "../../prisma/client"

interface AlunoRequest {
    name: string,
    email: string,
    prontuario: string,
}

interface ChromebookRequest {
    serial: string,
}

interface ResponsavelRequest {
    name: string,
    phone: string,
    email: string
}

interface TurmaRequest {
    name: string,
}

interface FullAlunoRequest {
    TurmaRequest: TurmaRequest,
    ResponsavelRequest: ResponsavelRequest,
    ChromebookRequest: ChromebookRequest,
    AlunoRequest: AlunoRequest,
}

export class CreateFullAlunoService {
    async execute({
        TurmaRequest,
        ResponsavelRequest,
        ChromebookRequest,
        AlunoRequest,
    }: FullAlunoRequest) {

        const fullAluno = await client.aluno.create({
            data: {
                name: AlunoRequest.name,
                email: AlunoRequest.email,
                prontuario: AlunoRequest.prontuario,
                responsaveis: {
                    create: [
                        {
                            email: ResponsavelRequest.email,
                            name: ResponsavelRequest.name,
                            phone: ResponsavelRequest.phone
                        }
                    ]
                },
                turma: {
                    connectOrCreate: {
                        where: {
                            name: TurmaRequest.name
                        },
                        create: {
                            name: TurmaRequest.name
                        }
                    }
                },
                chromebook: {
                    create: {
                        serial: ChromebookRequest.serial
                    }
                }
            }
        })

        return fullAluno;
    }
}
