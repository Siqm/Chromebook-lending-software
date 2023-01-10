import client from "../../prisma/client";

interface TurmaRequest {
    name: string,
}

export class CreateTurmaService {
    async execute({name}: TurmaRequest) {

        const turma = await client.turma.create({
            data : {
                name
            }
        })

        return turma;
    }
}
