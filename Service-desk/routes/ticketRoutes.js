const express = require('express');
const router = express.Router();
const {
  createTicket,
  getTickets,
  getTicket,
  updateTicket,
  deleteTicket
} = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

//*Gets all auth users tickets and creates a ticket (read, create)
// can chain on .get and .post to the .route just to get the users tickets
// In the GET handler the protect is so only an authenticated user can get his own tickets only.
// Could admin functionality to get all tickets later...
router.route('/').post(protect, createTicket).get(protect, getTickets);

//*To get an auth user's single ticket by ticket id, read, edit and delete
router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)

// *RE-ROUTE INTO NOTE ROUTER
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

module.exports = router;
