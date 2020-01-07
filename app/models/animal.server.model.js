const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const AnimalSchema = new Schema({
name: String,
habitat: String,
group: String,
noise: String
});

AnimalSchema.set('toJSON', { getters: true });
mongoose.model('Animal', AnimalSchema);