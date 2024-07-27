const { Ticket } = require('../models');

const createTicket = async (req, res) => {
  try {
    const { userId, category, description, status } = req.body;
    const newTicket = await Ticket.create({ userId, category, description, status });
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function getAllTickets(req, res) {
  try {
    const ticket = await Ticket.findAll();
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ error: "Error fetching tickets" });
  }
}


const getTicketsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const tickets = await Ticket.findAll({ where: { userId } });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const editTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, category, description, status } = req.body;
    const [updated] = await Ticket.update({ userId, category, description, status }, {
      where: { id }
    });
    if (updated) {
      const updatedTicket = await Ticket.findOne({ where: { id } });
      res.status(200).json(updatedTicket);
    } else {
      throw new Error('Ticket not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ticket.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      throw new Error('Ticket not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTicket,
  editTicket,
  deleteTicket,
  getAllTickets,
  getTicketsByUserId
};
