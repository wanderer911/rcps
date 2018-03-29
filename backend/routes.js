var express = require('express');
var router = express.Router();
var mongojs = require('mongojs'); //old
var db = mongojs('mongodb://andrew:andrew@ds151909.mlab.com:51909/blog');
var bodyParser = require('body-parser');

//mongodb://andrew:111111@ds227939.mlab.com:27939/rcps

function handleErrors(res,status,message){
	res.status(status).json({"error":message});
}

function checkId(id){
  const checkForHexRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/;
  return checkForHexRegExp.test(id);
}


const  inputValidation = function(recipe){
  if(!recipe.title || !recipe.text){
    return "wrong input";
  }
  else if (recipe.title.length>150){
    return "title to big";
  } else {
    return false;
  }
}

//get all
router.get('/api/v1/rcp',function(req,res){
  db.recipes.find(function(err,recipes){
    if(err){
      handleErrors(res,424,"database problem");
    }
    res.json(recipes);
  });
});

//get one
router.get('/api/v1/rcp/:id',function(req,res){
    if(checkId(req.params.id)){
      db.recipes.findOne({'_id':mongojs.ObjectId(req.params.id)},function(err,recipe){
        if(err){
          handleErrors(res,424,"database problem");
        }
        else if(recipe==null){
          handleErrors(res,404,"wrong id");
        }
        else{
          //handleErrors(res,200,'something wend wrong with db');
          res.status(200).json(post);//TODO add error
        }
      });
    } else {
      handleErrors(res,404,"wrong id");
    }
});

//create one
router.post('/api/v1/rcp',function(req,res){
  const recipe = req.body;
  const result = inputValidation(recipe);
  if(result){
    handleErrors(res,400,result)
  }
  else {
    const now = new Date();
    newRecipe = {
      title:recipe.title,
      description:recipe.description,
      created:now,
      updated:now,
      versions:[]
    };
    db.recipes.save(newRecipe,function(err,recipe){
      if(err){
        handleErrors(res,424,"database problem");
      }
      res.status(201).json(recipe);
    });
  }
});

//update
router.put('/api/v1/rcp/:id',
  function(req,res){
    if(checkId(req.params.id)){
      var recipe = req.body;
      const result = inputValidation(recipe);
      if(result){
        handleErrors(res,400,result)
      }
      else{
        db.recipes.findOne({'_id':mongojs.ObjectId(req.params.id)},function(err,doc){
          if (err){
            handleErrors(res,424,"database problem");
          }
          else{
            doc.title = post.title;
            doc.description = post.description;
            db.recipes.update({'_id':mongojs.ObjectId(req.params.id)},
            doc,function(err,task){
              if (err){
                handleErrors(res,424,"database problem");
              }
              res.status(202).json(task);
            });
          }
        });
      }
    }else {
      handleErrors(res,404,"wrong id");
    }
});

//delete
router.delete('/api/v1/rcp/:id',function(req,res){
  if(checkId(req.params.id)){
    db.recipes.findOne({'_id':mongojs.ObjectId(req.params.id)},function(err,doc){
      if (err){
        handleErrors(res,424,"database problem");
      }
      else{
        db.recipes.remove({'_id':mongojs.ObjectId(req.params.id)},function(err,post){
          if (err){
            handleErrors(res,424,"database problem");
          }
          res.status(204).json({"answer":"No content"});
        });
      }
    });

  } else {
    handleErrors(res,404,"wrong id");
  }
});

module.exports = router;