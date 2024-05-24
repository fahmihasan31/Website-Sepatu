const express = require('express');
const userController = require('../controllers/userController');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth.verifyToken, auth.isAdmin, userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', auth.verifyToken, auth.isAdmin, userController.getUser);
router.patch('/:id', auth.verifyToken, auth.isAdmin, userController.updateUser);
router.delete('/:id', auth.verifyToken, auth.isAdmin, userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
