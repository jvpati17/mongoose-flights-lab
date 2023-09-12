const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};

async function index(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', {
    flight
    })
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''});
}
  
async function create(req, res) {
    console.log(req.body)
    try  {
        await Flight.create(req.body)
        res.redirect('/')
    } catch(err) {
        console.log(err)
        res.redirect('/flights/new')

    }
}
async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight._id})
    res.render('flights/show', {
        flight
    })
}
