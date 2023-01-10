import client from "../../prisma/client";


export class ListAlunoService {
    async execute() {
        const alunos = await client.aluno.findMany({});

        return alunos
    }
}
