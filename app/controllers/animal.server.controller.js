
const Animal = require('mongoose').model('Animal');

exports.create = function(req, res, next) {
    const animal = new Animal(req.body);
    animal.save(function(err) {
        if (err) {
        return next(err);
        } else {
        res.json(animal);
        console.log("req " + req.body);
        console.log("res " + res.body)
        console.log("create animal");
        console.log(animal);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.animal);
    };

exports.list = function(req, res, next) {
    Animal.find({}, function(err, animal) {
    if (err) {
    return next(err);
    } 
    else {
    console.log(animal);
    res.json(animal);
    }
    });
};
exports.update = function(req, res, next) {
    Animal.findByIdAndUpdate(req.user.id, req.body, function(err, animal) {
    if (err) {
    return next(err);
    } else {
    res.json(animal);
    }
    });
};

exports.animalByID = function(req, res, next, id) {
    Animal.findOne({
    _id: id
    }, function(err, animal) {
        if (err) {
        return next(err);
        } else {
        req.animal = animal;
        next();
        }
    });
};

exports.delete = function(req, res, next) {
    req.animal.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.animal);
        }
    })
};
