const { Router } = require("express");
const { createRecipe } = require("../controlers/recipe");
const { Recipe, Diet, Cuisine, DishType } = require("../db");

const router = Router();


router.post("/", async (req, res) => {
  const {
    id,
    name,
    summary,
    score,
    healthScore,
    image,
    vegetarian,
    vegan,
    glutenFree,
    steps,
    cuisines,
    dishTypes,
    diets,
  } = req.body;

  const findEqual = await Recipe.findByPk(id)
  console.log(findEqual)
  if (findEqual) {
    console.log('entro aqui')
    res.status(400).send('That ID allready exist in DB')
    return;
  };

  const response = await createRecipe({
    id,
    name,
    summary,
    score,
    healthScore,
    image,
    vegetarian,
    vegan,
    glutenFree,
    steps,
    cuisines,
    dishTypes,
    diets,
  });
  res.status(response.status).send(response.msg);
});

module.exports = router;
