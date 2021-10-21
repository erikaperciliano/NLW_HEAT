import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserContoller';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);

export { router }