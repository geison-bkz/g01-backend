import { Router } from 'express';
import userControler from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir para usuario
// router.get('/', userControler.index); // Lista usuários
// router.get('/:id', userControler.show); // Lista usuário

router.post('/', userControler.store);
router.put('/', loginRequired, userControler.update);
router.delete('/', loginRequired, userControler.delete);

export default router;

/*
index => lista todos usuários => GET
store/create => cria um novo usuario => POST
delete => apaga um usuario => DELETE
show => mostra um usuario => GET
update => atualiza um usuario => PATCH ou PUT
*/
