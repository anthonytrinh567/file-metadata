var express = require('express');
var multer = require('multer');
var upload = multer({ dest: './uploads/' });
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/file', upload.single('uploader'), function(req, res, next) {
  res.render('index', {
    name : req.file.originalname,
    encode : req.file.encoding,
    mime : req.file.mimetype,
    size : req.file.size
  });
});

module.exports = router;
