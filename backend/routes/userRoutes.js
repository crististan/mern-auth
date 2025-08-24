import express from 'express';
import { 
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
 } from '../controllers/userController.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;