import {Router, Request, Response} from 'express'
import 'express-async-errors'

const router = Router();

router.get('/', (req: Request, res: Response) => {
    throw new Error("Teste");
})

export { router }