const router = require('express').Router();
let Goods = require('../models/goods.model');

router.route('/').get((req, res) => {
    Goods.find()
    .then(goods => res.json(goods))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const code = Number(req.body.code);
  const goodsname = req.body.goodsname;
  const mass = Number(req.body.mass);
  

  const newGoods = new Goods({
    code,
    goodsname,
    mass,
  });

  newGoods.save()
  .then(() => res.json('Goods added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Goods.findById(req.params.id)
    .then(goods => res.json(goods))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Goods.findByIdAndDelete(req.params.id)
    .then(() => res.json('Goods deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Goods.findById(req.params.id)
    .then(goods => {
        goods.code = Number(req.body.code);
        goods.goodsname = req.body.goodsname;
        goods.mass = Number(req.body.mass);
      

        goods.save()
        .then(() => res.json('Goods updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;