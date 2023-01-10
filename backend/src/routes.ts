import {Router} from 'express'
import 'express-async-errors'
import { CreateAlunoController } from './controllers/aluno/CreateAlunoController';
import { ListAlunoController } from './controllers/aluno/ListAlunoController';
import { CreateChromebookController } from './controllers/chromebook/CreateChromebookController';
import { ListChromebookController } from './controllers/chromebook/ListChromebookController';
import { CreateResponsavelController } from './controllers/responsavel/CreateResponsavelController';
import { CreateTurmaController } from './controllers/turma/CreateTurmaController';

const router = Router();

// Rotas para aluno
router.post("/aluno", new CreateAlunoController().handle)
router.get('/aluno', new ListAlunoController().handle)

// Rotas para chromebook
router.post('/chromebook', new CreateChromebookController().handle)
router.get('/chromebook', new ListChromebookController().handle)

// Rotas para responsavel
router.post('/responsavel', new CreateResponsavelController().handle)

// Rotas para turma
router.post('/turma', new CreateTurmaController().handle)



export { router }
