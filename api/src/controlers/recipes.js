const axios = require("axios");
const { Recipe, Cuisine, Diet, DishType } = require("../db");
const Recipe = require("../models/Recipe");
require("dotenv").config();
const { API_KEY, API_KEY_1 } = process.env;

const getApiData = async () => {
  try {
    const apiRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    if (apiRecipes.status !== 200) {
      apiRecipes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_1}&addRecipeInformation=true&number=100`
      );
    };
    let apiData = [];
    apiRecipes.data.results.map((recipe) => {
      let newSteps = [];
      for (let i = 0; i < recipe.analyzedInstructions[0].steps.length; i++){
        let stepToAdd = {
          number: recipe.analyzedInstructions[0].steps[i].number,
          step: recipe.analyzedInstructions[0].steps[i].step
        }
        newSteps.push(stepToAdd)
      }
      let newRecipe = {
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        score: recipe.spoonacularScore,
        healthScore: recipe.healthScore,
        image: recipe.image,
        steps: newSteps,
        cuisines: recipe.cuisines,
        dishTypes: recipe.dishTypes,
        diets: recipe.diets,
      }
      apiData.push(newRecipe)
    });
    return apiData;
  } catch (error) {
    return new Error(error);
  };
};

const getDBData = async () => {
  try {
    const dbRecipes = await Recipe.findAll({
      include: [{
        model: Cuisine,
    }, {
        model: Diet,
    }, {
        model: DishType,
    }, 
    ],
    });
    return dbRecipes;
  } catch (error) {
    return new Error(error);
  };
};

const getAllRecipes = async () => {
  try {
    const apiInfo = await getApiData();
    const dbInfo = await getDBData();

    const allData = [...apiInfo, ...dbInfo]

    return allData;

  } catch (error) {
    return new Error(error)
  };
};

const getRecipeById = async (id) => {
  try {
    if (typeof id === "string" && id.slice(0, 3) === "DBC") {
      let recipeFind = await Recipe.findByPk(id, {
        include: [
          {
            model: Cuisine,
          },
          {
            model: Diet,
          },
          {
            model: DishType,
          },
        ],
      });
      return recipeFind;
    } else {
      let recipeFind = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      if (recipeFind.status !== 200) {
        recipeFind = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_1}`
        );
      }
      return recipeFind.data.results
    }

  } catch (error) {
    return new Error(error)
  };
};

module.exports = {
  getApiData,
  getDBData,
  getAllRecipes
}