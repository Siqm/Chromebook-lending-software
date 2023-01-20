import client from "../../prisma/client";

export class DetailUserService {
    async execute(userId: string) {

        if (!userId) {
            throw new Error("User id must be provided")
        }

        const user = await client.user.findFirst({
            where: {
                id: userId
            },
            select: {
                name: true,
                email: true,
                lastName: true,
                id: true,
                role: true
            }
        })

        return user
    }
}
