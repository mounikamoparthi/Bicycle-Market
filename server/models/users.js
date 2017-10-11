const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {type: String, default :''},
    last_name: {type: String, default :''},
    email: {type: String, unique: true},
    password: {type: String, default :''}
});


mongoose.model('User', UserSchema);