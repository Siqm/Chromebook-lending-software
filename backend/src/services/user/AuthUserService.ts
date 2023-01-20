import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import client from "../../prisma/client";

interface AuthRequest {
    email: string,
    password: string,
}

export class AuthUserService {
    async execute ({email, password}: AuthRequest) {

        userCredentialCheck(!!email)

        const user = await client.user.findFirst({
            where: {
                email
            }
        })

        userCredentialCheck(!!user)

        const passwordMatcher = await compare(password, user.password)

        userCredentialCheck(passwordMatcher)

        const token = sign({
            name: user.name,
            email: user.email
        },
        process.env.PRIVATE_KEY, {
            subject: user.id,
            expiresIn: '30d'
        })

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

function userCredentialCheck(credential: boolean) {
    if(!credential) {
        throw new Error("Email or password incorrect")
    }
}
