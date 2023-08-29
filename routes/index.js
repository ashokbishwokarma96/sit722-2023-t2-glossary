var express = require('express');
var router = express.Router();

const glossaryData = [
  {
    // id: 1,
    // term: "DevOps",
    // description: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle.",
    // references: "Ref 1"

  },
  // Add more terms and descriptions as needed
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'DevOps Glossary', glossary: glossaryData });
});


module.exports = router;
