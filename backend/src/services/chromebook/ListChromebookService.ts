import client from "../../prisma/client";

export class ListChromebookService {
    async execute() {
        const chromebook = await client.chromebook.findMany();

        return chromebook;
    }
}
