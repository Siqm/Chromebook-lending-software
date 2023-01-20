import client from "../../prisma/client";
import bcryptjs from 'bcryptjs'

interface UserRequest {
    role: string
    name: string,
    email: string,
    lastName: string,
    password: string,
}

export class CreateUserService {
    async execute({name, lastName, password, email, role}: UserRequest) {
        if(!email) {
            throw new Error('Email incorrect!');
        }

        const alreadyExists = await client.user.findFirst({
            where: {
                email
            }
        })

        if (alreadyExists) {
            throw new Error(
                'This email has been associated to a account already'
            )
        }

        const hashedPassword = await bcryptjs.hash(password, 12);

        const user = await client.user.create({
            data: {
                role,
                name,
                email,
                lastName,
                password: hashedPassword,
            },
            select: {
                name: true,
                role: true,
                email: true
            }
        })

        return user;
    }
}
