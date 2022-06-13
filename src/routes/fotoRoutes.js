import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoControler from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoControler.store);

export default router;
