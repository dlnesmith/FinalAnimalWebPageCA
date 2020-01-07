const animal = require('../../app/controllers/animal.server.controller');
module.exports = function(app) {
app.route('/animal')
.post(animal.create)
.get(animal.list);

app.route('/animal/:animalId')
.get(animal.read)
.put(animal.update)
.delete(animal.delete);

app.param('animalId', animal.animalByID);
};
