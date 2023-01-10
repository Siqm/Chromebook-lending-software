import {Router} from 'express'
import 'express-async-errors'
import { CreateAlunoController } from './controllers/aluno/CreateAlunoController';
import { CreateChromebookController } from './controllers/chromebook/CreateChromebookController';
import { CreateTurmaController } from './controllers/turma/CreateTurmaController';

const router = Router();

// Rotas para aluno
router.post("/aluno", new CreateAlunoController().handle)

// Rotas para turma
router.post('/turma', new CreateTurmaController().handle)


// Rotas para chromebook
router.post('/chromebook', new CreateChromebookController().handle)

export { router }
