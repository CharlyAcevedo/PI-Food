const { Router } = require("express");
const {
  getCuisines,
  getDiets,
  getDishTypes,
  getAllTypes,
} = require("../controlers/types");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await getAllTypes();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.get("/dishTypes", async (req, res) => {
  try {
    const response = await getDishTypes();

    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.get("/cuisines", async (req, res) => {
  try {
    const response = await getCuisines();

    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.get("/diets", async (req, res) => {
  try {
    const response = await getDiets();

    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


module.exports = router;