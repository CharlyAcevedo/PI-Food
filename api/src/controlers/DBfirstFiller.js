const axios = require("axios");
const { Cuisine, Diet, DishType } = require("../db");
require("dotenv").config();
const { API_KEY, API_KEY_1 } = process.env;

const getApiDataToDB = async () => {
  try {
    let checkGeneral = 0;
    const checkCuisines = await Cuisine.findAll();
    if (Array.isArray(checkCuisines) && checkCuisines.length === 0)
      checkGeneral++;
    const checkDiets = await Diet.findAll();
    if (Array.isArray(checkDiets) && checkDiets.length === 0) checkGeneral++;
    const checkDishTypes = await DishType.findAll();
    if (Array.isArray(checkDishTypes) && checkDishTypes.length === 0)
      checkGeneral++;
    if (checkGeneral === 0)
      return console.log(
        "The database is up and ready to serve, whit no changes!!! ;)"
      );
    // console.log("este es el check", checkGeneral);

    const apiRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    if (apiRecipes.status > 399) {
      apiRecipes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_1}&addRecipeInformation=true&number=100`
      );
    }
    // console.log('verifico apiRecipes', apiRecipes.data.results);
    // console.log("verifico status", apiRecipes.status);
    // console.log("verifico quota used", apiRecipes.headers["x-api-quota-used"]);
    const allCuisines = () => {
      let cuisinesToCreate = [];
      apiRecipes.data.results.map((recipe) => {
        if (Array.isArray(recipe.cuisines) && recipe.cuisines.length > 0) {
          cuisinesToCreate = [...cuisinesToCreate, ...recipe.cuisines];
        }
      });
      const uniqueCuisines = [...new Set(cuisinesToCreate)];
      const cuisinesFinal = [];
      for (let i = 0; i < uniqueCuisines.length; i++) {
        let newCuisine = {
          cuisine: uniqueCuisines[i],
        };
        cuisinesFinal.push(newCuisine);
      }
      return cuisinesFinal;
    };
    const createCuisines = Cuisine.bulkCreate(allCuisines());

    const allDiets = () => {
      let dietsToCreate = [];
      apiRecipes.data.results.map((recipe) => {
        if (Array.isArray(recipe.diets) && recipe.diets.length > 0) {
          dietsToCreate = [...dietsToCreate, ...recipe.diets];
        }
      });
      const uniqueDiets = [...new Set(dietsToCreate)];
      const dietsFinal = [];
      for (let i = 0; i < uniqueDiets.length; i++) {
        let newDiet = {
          diet_name: uniqueDiets[i],
        };
        dietsFinal.push(newDiet);
      }
      return dietsFinal;
    };
    const createDiets = Diet.bulkCreate(allDiets());

    const allDishTypes = () => {
      let dishTypesToCreate = [];
      apiRecipes.data.results.map((recipe) => {
        if (Array.isArray(recipe.dishTypes) && recipe.dishTypes.length > 0) {
          dishTypesToCreate = [...dishTypesToCreate, ...recipe.dishTypes];
        }
      });
      const uniqueDishTypes = [...new Set(dishTypesToCreate)];
      const dishTypesFinal = [];
      for (let i = 0; i < uniqueDishTypes.length; i++) {
        let newDishType = {
          dishType: uniqueDishTypes[i],
        };
        dishTypesFinal.push(newDishType);
      }
      return dishTypesFinal;
    };
    const createDishTypes = DishType.bulkCreate(allDishTypes());

    console.log("The database has been filled successfully; :)!!!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getApiDataToDB,
};
