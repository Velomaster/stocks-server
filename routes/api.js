var express = require('express');
var router = express.Router();

const { getScockPrice } = require('./../controllers/stocks');

/* GET users listing. */
router.get('/stock/:symbol', async (req, res, next) => {
  const symbol = req.params.symbol;

  try {
    const stockPrice = await getScockPrice(symbol);
   
    res.status(200).json({price: stockPrice});
    
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
