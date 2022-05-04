const { Router } = require("express");
const { createRecipe } = require("../controlers/recipe");
const { Recipe, Diet, Cuisine, DishType } = require("../db");

const router = Router();

router.get("/|", (req, res) => {
  res.send('si llega a la ruta')
})

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
