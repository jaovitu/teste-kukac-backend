import { Router } from 'express';

import UserService from './services/UserService.mjs';

const router = Router();

router.post('/users', UserService.getUserInfo);

export default router;
