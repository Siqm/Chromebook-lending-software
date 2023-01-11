import {Router} from 'express'
import 'express-async-errors'
import { CreateAlunoController } from './controllers/aluno/CreateAlunoController';
import { CreateFullAlunoController } from './controllers/aluno/CreateFullAlunoController';
import { DeleteAlunoController } from './controllers/aluno/DeleteAlunoController';
import { ListAlunoController } from './controllers/aluno/ListAlunoController';
import { ListAlunoRelationsController } from './controllers/aluno/ListAlunoRelationsController';
import { CreateChromebookController } from './controllers/chromebook/CreateChromebookController';
import { DeleteChromebookController } from './controllers/chromebook/DeleteChromebookController';
import { ListChromebookController } from './controllers/chromebook/ListChromebookController';
import { CreateResponsavelController } from './controllers/responsavel/CreateResponsavelController';
import { DeleteResponsavelController } from './controllers/responsavel/DeleteResponsavelController';
import { ListResponsaveisController } from './controllers/responsavel/ListResponsaveisController';
import { CreateTurmaController } from './controllers/turma/CreateTurmaController';
import { ListTurmaController } from './controllers/turma/ListTurmaController';

const router = Router();

// Rotas para aluno
router.post("/aluno", new CreateAlunoController().handle)
router.get('/aluno', new ListAlunoController().handle)
router.delete('/aluno', new DeleteAlunoController().handle)
router.post('/aluno/full', new CreateFullAlunoController().handle)
router.get('/aluno/relations', new ListAlunoRelationsController().handle)

// Rotas para chromebook
router.post('/chromebook', new CreateChromebookController().handle);
router.get('/chromebook', new ListChromebookController().handle);
router.delete('/chromebook', new DeleteChromebookController().handle)

// Rotas para responsavel
router.post('/responsavel', new CreateResponsavelController().handle);
router.get('/responsavel', new ListResponsaveisController().handle);
router.delete('/responsavel', new DeleteResponsavelController().handle)

// Rotas para turma
router.post('/turma', new CreateTurmaController().handle);
router.get('/turma', new ListTurmaController().handle);

export { router }
