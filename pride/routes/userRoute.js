const express = require('express');
const adminController = require('../controllers/adminController');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth.verifyToken, auth.isAdmin, adminController.createAdmin);
router.get('/', auth.verifyToken, auth.isAdmin, adminController.getAllAdmins);
router.get('/:id', auth.verifyToken, auth.isAdmin, adminController.getAdmin);
router.patch('/:id', auth.verifyToken, auth.isAdmin, adminController.updateAdmin);
router.delete('/:id', auth.verifyToken, auth.isAdmin, adminController.deleteAdmin);
router.post('/auth', adminController.login);

module.exports = router;
