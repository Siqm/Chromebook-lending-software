import client from "../../prisma/client";

export class ListProfessorService{
    async execute() {

        const professores = await client.professor.findMany()

        return professores
    }
}
