import client from "../../prisma/client";

export class ListTurmaService {
    async execute() {
        const turmas = await client.turma.findMany();

        return turmas;
    }
}
