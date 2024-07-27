
const express = require('express');
const router = express.Router();
const assignedProductController = require('../controllers/AssignedProductController');

router.post('/assign', assignedProductController.assignProduct);
router.get('/assigned-products', assignedProductController.getAssignedProducts);

module.exports = router;
