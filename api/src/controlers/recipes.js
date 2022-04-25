const axios = require("axios");
const { Recipe, Cuisine, Diet, DishType } = require("../db");
const Sequelize = require("sequelize");
require("dotenv").config();
const { API_KEY, API_KEY_1 } = process.env;

let apiData = [];

const getApiData = async () => {
  try {
    // console.log('este es apiData length', apiData.length)
    // console.log('apikeys', API_KEY, API_KEY_1)
    if (apiData.length > 0) return apiData;
    const apiRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    // console.log('llega hasta aqui')
    if (apiRecipes.status !== 200) {
      apiRecipes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_1}&addRecipeInformation=true&number=100`
      );
    }
    // let apiData = [];
    apiRecipes.data.results.map((recipe) => {
      let newSteps = [];
      if (recipe.analyzedInstructions[0] !== undefined) {
        let count = recipe.analyzedInstructions[0].steps.length;
        for (let i = 0; i < count; i++) {
          let stepToAdd = {
            number: recipe.analyzedInstructions[0].steps[i].number,
            step: recipe.analyzedInstructions[0].steps[i].step,
          };
          newSteps.push(stepToAdd);
        }
      } else {
        stepToAdd = {
          number: 1,
          step: "there is no steps listed for this recipe",
        };
        newSteps.push(stepToAdd);
      }
      let newRecipe = {
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        score: recipe.spoonacularScore,
        healthScore: recipe.healthScore,
        image: recipe.image,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
        steps: newSteps,
        cuisines: recipe.cuisines,
        dishTypes: recipe.dishTypes,
        diets: recipe.diets,
        dbCreated: false,
      };
      apiData.push(newRecipe);
    });
    // console.log(apiData)
    return apiData;
  } catch (error) {
    console.error(error);
    return new Error(error);
  }
};

const getDBData = async () => {
  try {
    const dbRecipes = await Recipe.findAll({
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
    return dbRecipes;
  } catch (error) {
    return new Error(error);
  }
};

const getAllRecipes = async (name) => {
  try {
    const apiInfo = await getApiData();
    const dbInfo = await getDBData();
    let allData = [];
    apiInfo ? (allData = [...apiInfo]) : console.log("no hay datos de la api");
    Array.isArray(dbInfo)
      ? (allData = [...allData, ...dbInfo])
      : console.log("no hay datos de la Base aun");

    if (typeof name === "string" && name.length > 0) {
      // console.log('llego el pedido por name ', name)
      let recipeToFind = allData.filter((recipe) => {
        return recipe.name.toLowerCase().includes(name.toLowerCase());
      });
      // console.log(recipeToFind)
      if (recipeToFind) {
        return recipeToFind;
      } else {
        return {
          msg: "Los sentimos la receta buscada no se encuentra en la base de datos",
        };
      }
    }
    // console.log(allData[0])
    return allData;
  } catch (error) {
    return new Error(error);
  }
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
      // console.log('llega a buscar en axios el id', id)
      let recipeFind = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      // if (recipeFind.status !== 200) {
      //   recipeFind = await axios.get(
      //     `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_1}`
      //   );
      // }
      // console.log(recipeFind.data)
      let newSteps = [];
      if (recipeFind.data.analyzedInstructions[0] !== undefined) {
        let count = recipeFind.data.analyzedInstructions[0].steps.length;
        // console.log('si encontro steps')
        for (let i = 0; i < count; i++) {
          let stepToAdd = {
            number: recipeFind.data.analyzedInstructions[0].steps[i].number,
            step: recipeFind.data.analyzedInstructions[0].steps[i].step,
          };
          newSteps.push(stepToAdd);
        }
      } else {
        // console.log('no encontro steps')
        stepToAdd = {
          number: 1,
          step: "there is no steps listed for this recipe",
        };
        newSteps.push(stepToAdd);
      }
      // console.log('estos son los steps', newSteps)
      let response = {
        id: recipeFind.data.id,
        name: recipeFind.data.title,
        summary: recipeFind.data.summary,
        score: recipeFind.data.spoonacularScore,
        healthScore: recipeFind.data.healthScore,
        image: recipeFind.data.image,
        vegetarian: recipeFind.data.vegetarian,
        vegan: recipeFind.data.vegan,
        glutenFree: recipeFind.data.glutenFree,
        steps: newSteps,
        cuisines: recipeFind.data.cuisines,
        dishTypes: recipeFind.data.dishTypes,
        diets: recipeFind.data.diets,
        dbCreated: false,
      };

      // console.log(response);

      return response;
    }
  } catch (error) {
    return new Error(error);
  }
};

module.exports = {
  getApiData,
  getDBData,
  getAllRecipes,
  getRecipeById,
};
