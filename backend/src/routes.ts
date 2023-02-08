import {Router} from 'express'
import 'express-async-errors'
import { CreateAlunoController } from './controllers/aluno/CreateAlunoController';
import { DeleteAlunoController } from './controllers/aluno/DeleteAlunoController';
import { ListAlunoController } from './controllers/aluno/ListAlunoController';
import { ListAlunoRelationsController } from './controllers/aluno/ListAlunoRelationsController';
import { CreateChromebookController } from './controllers/chromebook/CreateChromebookController';
import { DeleteChromebookController } from './controllers/chromebook/DeleteChromebookController';
import { ListChromebookController } from './controllers/chromebook/ListChromebookController';
import { CreateProfessorController } from './controllers/professor/CreateProfessorController';
import { ListProfessorController } from './controllers/professor/ListProfessorController';
import { CreateResponsavelController } from './controllers/responsavel/CreateResponsavelController';
import { DeleteResponsavelController } from './controllers/responsavel/DeleteResponsavelController';
import { ListResponsaveisController } from './controllers/responsavel/ListResponsaveisController';
import { CreateTurmaController } from './controllers/turma/CreateTurmaController';
import { ListTurmaController } from './controllers/turma/ListTurmaController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router();

// Rotas para Usuário
router.post('/user', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/me', new DetailUserController().handle)


// Rotas para aluno
router.post("/aluno", new CreateAlunoController().handle)
router.get('/aluno', new ListAlunoController().handle)
router.delete('/aluno', new DeleteAlunoController().handle)
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

// Rotas para professor
router.post('/professor', new CreateProfessorController().handle);
router.get('/professor', new ListProfessorController().handle)

export { router }
