var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"OnePlus 8T",
      category:"Mobile",
      color:"Aquamarine Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzKBGZfVW9NLY1uGYtVCToA7qY7_o4ej23ZIr9hxk_7c5FmvXr2HjjwVVokU&usqp=CAc"
    },
    {
      name:"Samsung Galaxy M31",
      category:"Mobile",
      color:"Ocean blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWL2V7vQUsuFBM3_zUkoMxuExqpOVBUuU2DAAiUsdz80EXnFeF_4a0gc7nkw&usqp=CAc"
    },
    {
      name:"iPhone 12",
      category:"Mobile",
      color:"Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkcCFMD6Z4QB0A5QYrHaOWwscC4BJxi2jhtXFRxgi5zX9BIfmOpKHjksb0PL-wuVD_5BswMiA&usqp=CAchttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkcCFMD6Z4QB0A5QYrHaOWwscC4BJxi2jhtXFRxgi5zX9BIfmOpKHjksb0PL-wuVD_5BswMiA&usqp=CAchttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzKBGZfVW9NLY1uGYtVCToA7qY7_o4ej23ZIr9hxk_7c5FmvXr2HjjwVVokU&usqp=CAc"
    },
    {
      name:"Redmi Note 10",
      category:"Mobile",
      color:"Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyF7Qw0CEvWyeoVcmEIeow_fpSXNWjgvTeF827SQZKfBeK9pqf8Yb4KL8M8dJWLArW3K3EEOQ&usqp=CAchttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzKBGZfVW9NLY1uGYtVCToA7qY7_o4ej23ZIr9hxk_7c5FmvXr2HjjwVVokU&usqp=CAc"
    }
  ]
  res.render('index', {products,admin:false});
});

module.exports = router;
