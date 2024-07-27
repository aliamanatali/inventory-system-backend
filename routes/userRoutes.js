const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', UserController.getAllUsers);
router.post('/users/', UserController.createUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users/:id', UserController.editUser);

module.exports = router;
