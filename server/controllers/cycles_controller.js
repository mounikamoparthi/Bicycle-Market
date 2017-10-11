const mongoose = require('mongoose');
const User = mongoose.model('User');
const session = require('express-session');
const Bicycle = mongoose.model('Bicycle');
mongoose.Promise = global.Promise;

module.exports = {
    addBike: (req, res, next) => {
        let b = new Bicycle(req.body);
        b.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    currentBikes:(req,res) =>{
        Bicycle.find({user_id: req.session.user_id})
        .then(bicycle => {res.json(bicycle);})
				.catch(err => {res.status(500).json(err); })
    },
    showAll:(req,res) =>{
        Bicycle.find({})
        .then(bicycle => {res.json(bicycle);})
				.catch(err => {res.status(501).json(err); })
    },
    editBike:(req,res) => {
        
        Bicycle.findByIdAndUpdate(req.body._id, req.body)
        .then(() => { res.json(true);})
        .catch((err) => {res.status(502).json(err);})
    },
    delBike: (req,res) => {
        Bicycle.findByIdAndRemove(req.body._id)
        .then(() => { res.json(true);})
        .catch((err) => {res.status(503).json(err);})
    },
    getRandom: (req,res,next) => {
        Bicycle.find({})
        .then((bicycle) => { 
            let numBikes = bicycle.length;
            let rand = Math.floor(Math.random() * numBikes);
            res.json(bicycle[rand]); })
        .catch((err) => { res.status(450).json(err); })
    }
}
