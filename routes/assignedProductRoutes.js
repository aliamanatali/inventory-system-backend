
const express = require('express');
const router = express.Router();
const assignedProductController = require('../controllers/AssignedProductController');

router.post('/assign', assignedProductController.assignProduct);
router.get('/assign/:userId', assignedProductController.getAssignedProductsByUserId);

module.exports = router;
