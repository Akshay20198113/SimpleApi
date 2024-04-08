import express from "express";
const router = express.Router();
import { addNewUser, getUserWithId, deleteUserWithId, UpdateUserWithId } from '../controllers/users.js';

router.get('/', (req, res) => {
    res.send(users);
});
router.post('/', addNewUser);
router.get('/:id', getUserWithId);
router.delete('/:id', deleteUserWithId);
router.patch('/:id', UpdateUserWithId);

export default router;