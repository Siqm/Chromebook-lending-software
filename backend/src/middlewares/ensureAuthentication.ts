import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string
}

function ensureAuthentication(req: Request, res: Response, next: NextFunction) {


    const authToken: string = (req.headers.authorizatrion || req.headers.authorization) as string;

    if(!authToken) {
        return res.status(401).send();
    }

    const [, token] = authToken.split(' ');

    try {
        const { sub } = verify(
            token,
            process.env.PRIVATE_KEY
        ) as Payload

        req.user_id = sub

        return next();
    } catch(err) {

        console.log('erro ', err)
        return res.status(401).end()
    }
}

export { ensureAuthentication }
