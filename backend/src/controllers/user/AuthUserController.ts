import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const authUserService = new AuthUserService();

        const auth = await authUserService.execute(req.body);

        return res.json(auth)
    }

}
 export { AuthUserController }
