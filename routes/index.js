var express = require('express');
var router = express.Router();

const {index,detail} = require('../controllers/indexController')


/* GET home page. */
router
.get('/', index)
.get('/detail/:id', detail)




module.exports = router;
