import client from "../../prisma/client";

interface ChromebookRequest {
    serial: string,
    model: string,
}

export class CreateChromebookService {

    async execute({serial, model}: ChromebookRequest) {

        if (model) {
            const chromebook = await client.chromebook.create({
                data: {
                    serial,
                    model
                }
            })

            return chromebook
        }

        else {
            const chromebook = await client.chromebook.create({
                data: {
                    serial,
                }
            })

            return chromebook
        }
    }
}
