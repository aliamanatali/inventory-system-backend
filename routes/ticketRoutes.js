const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/TicketController'); // Adjust the path if necessary

router.get('/tickets', ticketController.getAllTickets);

router.post('/tickets', ticketController.createTicket);

router.put('/tickets/:id', ticketController.editTicket);

router.delete('/tickets/:id', ticketController.deleteTicket);

router.get('/tickets/:userId', ticketController.getTicketsByUserId);


module.exports = router;
