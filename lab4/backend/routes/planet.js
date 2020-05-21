const router = require('express').Router();
let Planet = require('../models/planet.model');

router.route('/').get((req, res) => {
    Planet.find()
    .then(planet => res.json(planet))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const planetname = req.body.planetname;
  const stationname = req.body.stationname;
  const capasity = Number(req.body.capasity);
  const mass = Number(req.body.mass);
  

  const newPlanet = new Planet({
    planetname,
    stationname,
    capasity,
    mass,
  });

  newPlanet.save()
  .then(() => res.json('Planet added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Planet.findById(req.params.id)
    .then(planet => res.json(planet))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Planet.findByIdAndDelete(req.params.id)
    .then(() => res.json('Planet deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Planet.findById(req.params.id)
    .then(planet => {
        planet.planetname = req.body.planetname;
        planet.stationname = req.body.stationname;
        planet.capasity = Number(req.body.capasity);
        planet.mass = Number(req.body.mass);
      

        planet.save()
        .then(() => res.json('Planet updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;