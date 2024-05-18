const express = require('express');
const orderListController = require('../controllers/orderListController');
const validate = require('../middlewares/validate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/',auth.isAdmin , auth.verifyToken, orderListController.getAllOrderLists);


module.exports = router;
