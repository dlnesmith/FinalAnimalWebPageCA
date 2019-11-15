var animalList = require('mongoose').model('Animal');

exports.render = function(req, res) 
{
    if (req.session.lastVisit) 
        {
        console.log(req.session.lastVisit);
        }
    req.session.lastVisit = new Date();
    animalList.find({}, function(err, animal) 
        {
        if (err) 
            {
            console.log(err);
            } 
        else 
            {
            console.log(animal);
            res.render('index', {title: 'Hello World', allAnimals: animal});
            }
        }
        )
    
};
    