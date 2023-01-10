import { Request, Response} from 'express'
import { CreateAlunoService } from '../../services/aluno/CreateAlunoService'

export class CreateAlunoController {
    async handle(req: Request, res: Response) {


        const createAlunoService = new CreateAlunoService();

        const student = await createAlunoService.execute(req.body);

        return res.json(student)
    }
}
