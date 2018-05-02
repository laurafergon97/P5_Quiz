var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/credits',function(req,res,next){
  res.render('credits');
});
router.get('/quizzes',function(req,res,next){
    res.render('quizzes');
});

module.exports = router;
