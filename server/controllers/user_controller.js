const mongoose = require('mongoose');
const User = mongoose.model('User');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
    register: (req, res, next) => {
        console.log(req.body);
        let u = new User(req.body);
        u.save()
        .then((user) => { 
            req.session.name = user.first_name;
            req.session.user_id = user._id;
            res.json(true); })
        .catch((err) => { res.status(409).json(err) });
    },
    login: (req, res, next) => {
        User.findOne({email: req.body.email.toLowerCase()})
        .then((user) => { 
            if (!user) {
                err = {error: "No user registered with that email"};
                res.status(401).json(err);
            }
            else if (!(req.body.password==user.password)) {
                res.status(402).json({error: "Password is incorrect"});
            }
            else {
                req.session.name = user.first_name;
                req.session.user_id = user._id;
                res.json(true);
            }
        })
        .catch((err) => { res.status(409).json(err); });
    },
    currentUser: (req,res) => {
        if(req.session.user_id){
			User.findOne({_id: req.session.user_id})
				.then(user => res.json(user))
				.catch(err => res.status(412).json(err))
		} else {
			res.json(false)
		}
	},
    userContact: (req,res) =>{
        User.findOne({_id: req.body.user_id})
        .then(user => res.json(user))
				.catch(err => res.status(415).json(err))
		},
    logout: (req, res, next) => {
        req.session.destroy();
        res.json(true);
    },
   
    }
