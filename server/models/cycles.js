const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
    user_id: {type: String},
    image: {type: String},
    title: {type: String, default :''},
    description: {type: String, default :''},
    price: {type: Number, default: 0},
    location: {type: String, default :''}
});


mongoose.model('Bicycle', BikeSchema);