import client from "../../prisma/client";


export class ListAlunoService {
    async execute() {
        const alunos = await client.aluno.findMany({
            select: {
                chromebook: {
                    select: {
                        serial: true
                    }
                },
                name: true,
                prontuario: true,
                turma: true
            }
        });

        return alunos
    }
}
