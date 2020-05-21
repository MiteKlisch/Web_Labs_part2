const router = require('express').Router();
let SpaceStation = require('../models/spacestation.model');

router.route('/').get((req, res) => {
    SpaceStation.find()
    .then(spacestation => res.json(spacestation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const needs = Number(req.body.needs);
  const spacestationname = req.body.spacestationname;
  const capasity = Number(req.body.capasity);
  

  const newSpaceStation = new SpaceStation({
    spacestationname,
    needs,
    capasity,
  });

  newSpaceStation.save()
  .then(() => res.json('SpaceStation added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    SpaceStation.findById(req.params.id)
    .then(spacestation => res.json(spacestation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    SpaceStation.findByIdAndDelete(req.params.id)
    .then(() => res.json('SpaceStation deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    SpaceStation.findById(req.params.id)
    .then(spacestation => {
        
        spacestation.spacestationname = req.body.spacestationname;
        spacestation.needs = Number(req.body.needs);
        spacestation.capasity = Number(req.body.capasity);
      

        spacestation.save()
        .then(() => res.json('SpaceStation updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;