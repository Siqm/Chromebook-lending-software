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
    id: string,
}

interface FullAlunoRequest {
    TurmaRequest: TurmaRequest,
    ResponsavelRequest: ResponsavelRequest,
    ChromebookRequest: ChromebookRequest,
    AlunoRequest: AlunoRequest,
}

// export class CreateAlunoService {
//     async execute({
//         TurmaRequest,
//         ResponsavelRequest,
//         ChromebookRequest,
//         AlunoRequest,
//     }: FullAlunoRequest) {

//         console.log(!!ChromebookRequest.serial)

//         // Se chegar apenas a informação do aluno
//         if (!ResponsavelRequest && !ChromebookRequest.serial) {
//             console.log("Executando primeiro if")
//             const student = await client.aluno.create({
//                 data: {
//                     name: AlunoRequest.name,
//                     email: AlunoRequest.email,
//                     prontuario: AlunoRequest.prontuario,
//                     turma: {
//                         connect: {
//                             id: TurmaRequest.id
//                         }
//                     }
//                 }
//             })

//             return student
//         }

//         // Se chegar informação do aluno e do pai
//         if (!ChromebookRequest) {
//             console.log("Executando segundo if")

//             const student = await client.aluno.create({
//                 data: {
//                     name: AlunoRequest.name,
//                     email: AlunoRequest.email,
//                     prontuario: AlunoRequest.prontuario,
//                     turma: {
//                         connect: {
//                             id: TurmaRequest.id
//                         }
//                     },
//                     responsaveis: {
//                         connectOrCreate: {
//                             where: {
//                                 email: ResponsavelRequest.email
//                             },
//                             create: {
//                                 email: ResponsavelRequest.email,
//                                 name: ResponsavelRequest.name,
//                                 phone: ResponsavelRequest.phone
//                             }
//                         }
//                     }
//                 }
//             })

//             return student
//         }

//         console.log("Executando terceiro if")
//         const fullStudent = await client.aluno.create({
//             data: {
//                 name: AlunoRequest.name,
//                 email: AlunoRequest.email,
//                 prontuario: AlunoRequest.prontuario,
//                 turma: {
//                     connect: {
//                         id: TurmaRequest.id
//                     }
//                 },
//                 responsaveis: {
//                     connectOrCreate: {
//                         where: {
//                             email: ResponsavelRequest.email
//                         },
//                         create: {
//                             email: ResponsavelRequest.email,
//                             name: ResponsavelRequest.name,
//                             phone: ResponsavelRequest.phone
//                         }
//                     }
//                 },
//                 chromebook: {
//                     connectOrCreate: {
//                         where: {
//                             serial: ChromebookRequest.serial
//                         },
//                         create: {
//                             serial: ChromebookRequest.serial
//                         }
//                     }
//                 }
//             }
//         })

//         return fullStudent

//     }
// }


export class CreateAlunoService {
    async execute({
        TurmaRequest,
        ResponsavelRequest,
        ChromebookRequest,
        AlunoRequest,
    }: FullAlunoRequest) {

        const student = await client.aluno.create({
            data: {
                name: AlunoRequest.name,
                email: AlunoRequest.email,
                prontuario: AlunoRequest.prontuario,
                turma: {
                    connect: {
                        id: TurmaRequest.id
                    }
                },
                chromebook: {
                    connectOrCreate: {
                        where: {
                            serial: ChromebookRequest.serial
                        },
                        create: {
                            serial: ChromebookRequest.serial
                        }
                    }
                }
            }
        })

        return student
    }
}
