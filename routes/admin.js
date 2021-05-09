var express = require('express');
var router = express.Router();
var productHelpers=require("../helpers/product-helpers")

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"OnePlus 8T",
      category:"Mobile",
      description:"Aquamarine Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzKBGZfVW9NLY1uGYtVCToA7qY7_o4ej23ZIr9hxk_7c5FmvXr2HjjwVVokU&usqp=CAc"
    },
    {
      name:"Samsung Galaxy M31",
      category:"Mobile",
      description:"Ocean blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWL2V7vQUsuFBM3_zUkoMxuExqpOVBUuU2DAAiUsdz80EXnFeF_4a0gc7nkw&usqp=CAc"
    },
    {
      name:"iPhone 12",
      category:"Mobile",
      description:"Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkcCFMD6Z4QB0A5QYrHaOWwscC4BJxi2jhtXFRxgi5zX9BIfmOpKHjksb0PL-wuVD_5BswMiA&usqp=CAchttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkcCFMD6Z4QB0A5QYrHaOWwscC4BJxi2jhtXFRxgi5zX9BIfmOpKHjksb0PL-wuVD_5BswMiA&usqp=CAchttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzKBGZfVW9NLY1uGYtVCToA7qY7_o4ej23ZIr9hxk_7c5FmvXr2HjjwVVokU&usqp=CAc"
    },
    {
      name:"Redmi Note 10",
      category:"Mobile",
      description:"Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyF7Qw0CEvWyeoVcmEIeow_fpSXNWjgvTeF827SQZKfBeK9pqf8Yb4KL8M8dJWLArW3K3EEOQ&usqp=CAchttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzKBGZfVW9NLY1uGYtVCToA7qY7_o4ej23ZIr9hxk_7c5FmvXr2HjjwVVokU&usqp=CAc"
    }
  ]
  res.render("admin/view-products", {admin:true,products});
});

router.get("/add-product", function(req,res){
  res.render("admin/add-product")
})

router.post("/add-product", function(req,res){
 

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log(id);
    image.mv("./public/product-images/"+id+".jpg", (err)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
        console.log(err);
      }
    })
    
  })
})

module.exports = router;
 