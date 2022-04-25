const Sequelize = require('sequelize');
const { Cuisine, Diet, DishType } = require("../db");

const getCuisines = async () => {
    try {
        const allCuisines = await Cuisine.findAll();
        return allCuisines

    } catch (error) {
        return new Error(error)
    }
};

const getDiets = async () => {
    try {
        const allDiets = await Diet.findAll();
        return allDiets

    } catch (error) {
        return new Error(error)
    }
};

const getDishTypes = async () => {
    try {
        const allDishTypes = await DishType.findAll();
        return allDishTypes

    } catch (error) {
        return new Error(error)
    }
};

const getAllTypes = async () => {
    try{
        const dietsToSend = await getDiets();
        const cuisinesToSend = await getCuisines();
        const dishTypesToSend = await getDishTypes();

        const dataToSend = [{
            diets: dietsToSend,
            cuisines: cuisinesToSend,
            dishTypes: dishTypesToSend,
        }];

        return dataToSend;

    }catch (error) {
        return new Error(error)
    };
};

module.exports = {
    getCuisines,
    getDiets,
    getDishTypes,
    getAllTypes
}