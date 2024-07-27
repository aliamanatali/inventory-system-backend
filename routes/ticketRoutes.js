const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/TicketController'); // Adjust the path if necessary

// Get all tickets
router.get('/tickets', ticketController.getAllTickets);
// Create a new ticket
router.post('/tickets', ticketController.createTicket);

// Edit an existing ticket
router.put('/tickets/:id', ticketController.editTicket);

// Delete a ticket
router.delete('/tickets/:id', ticketController.deleteTicket);

router.get('/tickets/:userId', ticketController.getTicketsByUserId);


module.exports = router;
