import client from '../../prisma/client'

interface AlunoRequest {
    name: string,
    email: string,
    prontuario: string,
    turmaId: string
}

export class CreateAlunoService {
    async execute ({ name, email, prontuario, turmaId }: AlunoRequest) {
        const student = await client.aluno.create({
            data: {
                name,
                email,
                prontuario,
                turmaId
            }
        })

        return student;
    }
}
