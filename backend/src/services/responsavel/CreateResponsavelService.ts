import client from "../../prisma/client"

interface ResponsavelRequest {
    name: string,
    phone: string,
    email: string
}

export class CreateResponsavelService {
    async execute({ name, phone, email}: ResponsavelRequest) {

        const responsavel = await client.responsavel.create({
            data: {
                name,
                phone,
                email,
            }
        })

        return responsavel;
    }
}
