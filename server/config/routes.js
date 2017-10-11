const path = require("path")
const users = require('../controllers/user_controller.js');
const bikes = require('../controllers/cycles_controller.js');

module.exports = (app) =>{
    app.get('/logout', users.logout);
    app.post('/register', users.register);
    app.post('/login', users.login);
    app.get('/bikeOfTheDay', bikes.getRandom);
    app.post('/contact',users.userContact);
    app.post('/updateBike', bikes.editBike);
    app.post('/destroyBike', bikes.delBike);
    app.get('/list_allBikes',bikes.showAll);
    app.get('/getCurrentBikes', bikes.currentBikes);
     app.get('/get_logged_in_user', users.currentUser);
    app.post('/createBike', bikes.addBike);

    app.get("*", (req,res) =>{
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}