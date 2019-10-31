var animalList = require('mongoose').model('Animal');


exports.render = function(req, res) 
{
    if (req.session.lastVisit) 
        {
        console.log(req.session.lastVisit);
        }
    req.session.lastVisit = new Date();
    var eachAnimal = animalList.find({}, function(err, animal) 
        {
        if (err) 
            {
            return next(err);
            } 
        else 
            {
            console.log(animal)
            return animal;
            }
        }
        )
    res.render('index', 
        {
        title: 'Hello World',
        allAnimals: eachAnimal
        }
    );
};
    