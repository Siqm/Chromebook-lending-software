import client from "../../prisma/client";

interface ChromebookRequest {
    chromebookId: string;
}

export class DeleteChromebookService{

    async execute({chromebookId}: ChromebookRequest) {
        const chromebook = await client.chromebook.delete({
            where: {
                id: chromebookId
            }
        })

        return chromebook;
    }
}
