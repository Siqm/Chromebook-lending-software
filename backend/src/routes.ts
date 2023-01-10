import {Router, Request, Response} from 'express'
import 'express-async-errors'
import { CreateAlunoController } from './controllers/aluno/CreateAlunoController';
import { CreateTurmaController } from './controllers/turma/CreateTurmaController';

const router = Router();

// Rotas para aluno
router.post("/aluno", new CreateAlunoController().handle)

// Rotas para turma
router.post('/turma', new CreateTurmaController().handle)

export { router }
