import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cafehumo from "../../asets/img/cafehumo.gif";
import { getAllRecipes, getAllTypes, createRecipe } from "../../redux/actions";
import { testDisableSubmit, validateForm, regUrl } from "./controlers/controlers";

import "./styles/recipeCreate.css";

export default function RecipeCreateForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getAllTypes());
  }, [dispatch]);

  const allRecipes = useSelector((state) => state.allRecipes);
  const allDiets = useSelector((state) => state.allDiets);
  const allCuisines = useSelector((state) => state.allCuisines);
  const allDishTypes = useSelector((state) => state.allDishTypes);
  const created = useSelector((state) => state.created)

  let regexId = /^DBC-[0-9]/;
  const createdRecipes = allRecipes.filter((recipe) => {
    return regexId.test(recipe.id);
  });
  const newId =
    createdRecipes.length < 10
      ? `DBC-00${createdRecipes.length + 1}`
      : createdRecipes.length < 100
      ? `DBC-0${createdRecipes.length + 1}`
      : `DBC-${createdRecipes.length + 1}`;

  const [newRecipe, setNewRecipe] = useState({
    id: newId,
    name: "",
    summary: "",
    score: 0,
    healthScore: 0,
    image: "",
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    steps: [],
    actualStep: {
      number: 1,
      step: "",
    },
    cuisines: [],
    actual_cuisines: "",
    dishTypes: [],
    actual_dishTypes: "",
    diets: [],
    actual_diets: "",
  });

  const [errors, setErrors] = useState({
    name: "Title must have at least 3 characters, which can only be letters or numbers",
    summary: "You must write a sentence with a minimum of three words",
    score: "Write a number between 1 and 100",
    healthScore: "Write a number between 1 and 100",
    image: "A valid HTML address must be entered for the image",
    step: "Step must be a sentence with at least 3 words",
    steps:
      "At least one step must be added",
    cuisines: "At least one type of cuisine must be selected",
    dishTypes: "At least one type of dish type must be selected",
    diets: "At least one type of diet must be selected",
  });

  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    setDisableSubmit(testDisableSubmit(errors));
  }, [newRecipe, errors]);

  function handleOnChange(e) {
    if (validateForm(e.target.name, e.target.value)) {
      setErrors((prevState) => {
        return {
          ...prevState,
          [e.target.name]: "",
        };
      });
    } else {
      switch (e.target.name) {
        case "name":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]:
                "Title must have at least 3 characters, which can only be letters or numbers",
            };
          });
          break;
        case "summary":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]:
                "Write a sentence with a minimum of three words",
            };
          });
          break;
        case "image":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]:
                "A valid HTML address must be entered for the image",
            };
          });
          break;
        case "score":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: "Write a number between 1 and 100",
            };
          });
          break;
        case "healthScore":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: "Write a number between 1 and 100",
            };
          });
          break;
        case "steps":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]:
                "At least one step must be added",
            };
          });
          break;
        case "diets":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: "At least one type of diets must be selected",
            };
          });
          break;
        case "cuisines":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: "At least one type of cuisine must be selected",
            };
          });
          break;
        case "dishTypes":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]:
                "At least one type of dish type must be selected",
            };
          });
          break;
        case "step":
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: "Step must be a sentence with at least 3 words",
            };
          });
          break;
        default:
          break;
      }
    }
    if (
      e.target.name === "vegetarian" ||
      e.target.name === "vegan" ||
      e.target.name === "glutenFree"
    ) {
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.checked,
        };
      });
    } else if (e.target.name === "step") {
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          actualStep: {
            ...prevState.actualStep,
            step: e.target.value,
          },
        };
      });
    } else if (
      e.target.name === "diets" ||
      e.target.name === "cuisines" ||
      e.target.name === "dishTypes"
    ) {
      let actualType =
        e.target.name === "diets"
          ? "actualDiet"
          : e.target.name === "cuisines"
          ? "actualCuisine"
          : "actualDishType";
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [e.target.name]: prevState[e.target.name].includes(e.target.value)
            ? [...prevState[e.target.name]]
            : [...prevState[e.target.name], e.target.value],
          [actualType]: e.target.value,
        };
      });
    } else {
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
    setDisableSubmit(testDisableSubmit(errors));
  }

  function handleAddStep(e) {
    e.preventDefault();
    if (validateForm("step", newRecipe.actualStep.step)) {
      setDisableSubmit(testDisableSubmit(errors));
      setNewRecipe((prevState) => {
        const newStepNumber = prevState.actualStep.number + 1;
        const newStep = prevState.actualStep;
        return {
          ...prevState,
          steps: [...prevState.steps, newStep],
          actualStep: {
            number: newStepNumber,
            step: "",
          },
        };
      });
      setErrors((prevState) => {
        return {
          ...prevState,
          step: "Step must be a sentence with at least 3 words",
          steps: "",
        };
      });
    }
    setDisableSubmit(testDisableSubmit(errors));
  }

  function handleDeleteStep(e) {
    e.preventDefault();
    const stepsFilter = newRecipe.steps.filter((step) => {
      return Number(step.number) !== Number(e.target.name);
    });
    setNewRecipe((prevState) => {
      let firstStep = 1;
      const stepsForState =
        stepsFilter.length > 0
          ? stepsFilter.map((step) => {
              step.number = firstStep;
              firstStep++;
              return step;
            })
          : stepsFilter;
      let finalStep = stepsForState.length + 1;
      return {
        ...prevState,
        steps: stepsForState,
        actualStep: {
          number: finalStep,
          step: "",
        },
      };
    });
    if (stepsFilter.length === 0) {
      setErrors((prevState) => {
        return {
          ...prevState,
          steps:
            "At least one step must be added",
        };
      });
    }
  }

  function handleDeleteTypes(e) {
    const newStateType = newRecipe[e.target.id].filter((el) => {
      return el !== e.target.innerText;
    });
    setNewRecipe((prevState) => {
      let actual = 'actual_' + e.target.id
      return {
        ...prevState,
        [e.target.id]: newStateType,
        [actual]: ""
      };
    });
    if (newStateType.length === 0) {
      setErrors((prevState) => {
        return {
          ...prevState,
          [e.target.id]: `At least one type of ${e.target.id} must be selected`,
        };
      });
    }
  }

  function handleReset() {
    setDisableSubmit(true);
    setErrors({
      name: "Title must have at least 3 characters, which can only be letters or numbers",
      summary: "Write a sentence with a minimum of three words",
      score: "You must write a number between 1 and 100",
      healthScore: "You must write a number between 1 and 100",
      image: "A valid HTML address must be entered for the image",
      step: "Step must be a sentence with at least 3 words",
      steps:
        "At least one step must be added",
      cuisines: "At least one type of cuisine must be selected",
      dishTypes: "At least one type of dish type must be selected",
      diets: "At least one type of diet must be selected",
    });
    setNewRecipe({
      id: newId,
      name: "",
      summary: "",
      score: 0,
      healthScore: 0,
      image: "",
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      steps: [],
      actualStep: {
        number: 1,
        step: "",
      },
      cuisines: [],
      actualCuisine: "",
      dishTypes: [],
      actualDishType: "",
      diets: [],
      actualDiet: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let recipeToCreate = {
      id: newRecipe.id,
      name: newRecipe.name,
      summary: newRecipe.summary,
      score: Number(newRecipe.score),
      healthScore: Number(newRecipe.healthScore),
      image: newRecipe.image,
      vegetarian: newRecipe.vegetarian,
      vegan: newRecipe.vegan,
      glutenFree: newRecipe.glutenFree,
      steps: newRecipe.steps,
      cuisines: newRecipe.cuisines,
      dishTypes: newRecipe.dishTypes,
      diets: newRecipe.diets,
    };
    dispatch(createRecipe(recipeToCreate));
    handleReset();
  }

  return (
    <div className="form_page_container">
      <img className="back_image" src={cafehumo} alt="cafe humeante" />
      <div className="form_container">
        <section className="title_create">
          <h3 className="title_create_inside">
            Here you can create your own recipe, please check the instructions
            for each field
          </h3>
          { created.length > 0 ? <h5  className="title_create_done">{created}</h5> :
            <h5 className="title_create_inside">
            When all the fields are correct you can send us your recipe to be
            added to the database
          </h5>}
        </section>
        <form action="#">
          <section className="form_sections" id="section_title">
            <label className="form_labels" htmlFor="name">
              Write a Title for your recipe:
            </label>
            <input
              className="input_form"
              id="input_name"
              type="text"
              name="name" //name
              value={newRecipe.name}
              onChange={handleOnChange}
            />
            {errors.name.length > 0 ? (
              <div className="errors_alert">{errors.name}</div>
            ) : (
              <div className="ok_alert">Title is OK now</div>
            )}
          </section>
          <section className="form_sections" id="section_summary">
            <label className="form_labels" id="label_summary" htmlFor="summary">
              Write a summary describing your recipe:
            </label>
            <textarea
              className="form_textArea"
              name="summary" //summary
              rows="3"
              value={newRecipe.summary}
              onChange={handleOnChange}
            ></textarea>
            {errors.summary.length > 0 ? (
              <div className="errors_alert">{errors.summary}</div>
            ) : (
              <div className="ok_alert">Sumary is OK now</div>
            )}
          </section>
          <section className="form_sections" id="section_inputs">
            <label className="form_labels" htmlFor="image">
              Image:
            </label>
            <input
              className="input_form"
              id="img_input"
              type="text"
              name="image" //image
              value={newRecipe.image}
              onChange={handleOnChange}
            />
            {errors.image.length > 0 ? (
              <div className="errors_alert" id="error_image">
                {errors.image}
              </div>
            ) : (
              <div className="ok_alert" id="ok_image">
                Image URL is OK
              </div>
            )}
            {regUrl.test(newRecipe.image) ? (
              <img
                className="recipe_image"
                src={newRecipe.image}
                alt="your recipe"
              />
            ) : (
              <div className="recipe_image">
                Here you will see your recipe image
              </div>
            )}
            <div className="score_container_inputs">
              <div className="score_inside_inputs">
                <label className="form_labels" htmlFor="score">
                  Score:
                </label>
                <input
                  className="input_form"
                  id="scores_inputs"
                  type="text"
                  name="score" //score
                  value={newRecipe.score}
                  onChange={handleOnChange}
                />
                {errors.score.length > 0 ? (
                  <div className="errors_alert errors_score">
                    {errors.score}
                  </div>
                ) : (
                  <div className="ok_alert ok_score">Score is OK now</div>
                )}
              </div>
              <div className="score_inside_inputs">
                <label className="form_labels" htmlFor="healthScore">
                  Healt Score:
                </label>
                <input
                  className="input_form"
                  id="scores_inputs"
                  type="text"
                  name="healthScore" //healthScore
                  value={newRecipe.healthScore}
                  onChange={handleOnChange}
                />
                {errors.healthScore.length > 0 ? (
                  <div className="errors_alert errors_score">
                    {errors.healthScore}
                  </div>
                ) : (
                  <div className="ok_alert ok_score">
                    Health Score is OK now
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="form_sections" id="section_steps">
            <label className="form_labels label_steps" id="label_steps" htmlFor="step">
              Write here each of the steps to complete your recipe,<br /> then click Add Step button for each step:
            </label>
            <br />
            <input
              className="input_form"
              id="input_stepNumber"
              name="number" //steps.number
              type="text"
              value={newRecipe.actualStep.number}
              readOnly
            />
            <textarea
              className="input_form form_textArea"
              name="step" //steps.step
              id="step"
              cols="50"
              rows="2"
              value={newRecipe.actualStep.step}
              onChange={handleOnChange}
            ></textarea>
            {errors.step.length > 0 ? (
              <div className="errors_alert">{errors.step}</div>
            ) : (
              <div className="ok_alert">Step is OK now you can added</div>
            )}
            <button
              className="btn_form"
              id="btn_addStep"
              disable={errors.step.length > 0 ? "true" : "false"}
              onClick={handleAddStep}
            >
              Add Step
            </button>
            <div className="steps_selected">
              {newRecipe.steps.length > 0 ? (
                newRecipe.steps.map((step) => {
                  return (
                    <div className="added_step" key={step.number}>
                      {step.number}.- {step.step}{" "}
                      <button className="btn_form" name={step.number} onClick={handleDeleteStep}>
                        Delete
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="errors_alert">{errors.steps}</div>
              )}
            </div>
          </section>
          <section className="form_sections" id="section_types">
          <label className="form_labels main_labelTypes" htmlFor="diets">Select one or more types of Diet, Cuisine or Dish:</label>
          <br />
            <label className="form_labels label_types" htmlFor="diets">Diet:</label>
            <select
              className="input_form selector_types"
              name="diets"
              id="diets"
              value={newRecipe.actual_diets}
              onChange={handleOnChange}
            >
              <option value="">Select one or more Diets</option>
              {allDiets &&
                allDiets.map((diet) => {
                  return (
                    <option key={diet.id} value={diet.diet_name}>
                      {diet.diet_name}
                    </option>
                  );
                })}
            </select>
            <div className="types_container">
              {newRecipe.diets.length > 0 ? (
                newRecipe.diets.map((diet) => {
                  return (
                    <div
                      className="types_inside"
                      key={diet}
                      id="diets"
                      onDoubleClick={handleDeleteTypes}
                    >
                      {diet}
                    </div>
                  );
                })
              ) : (
                <div className="errors_alert errors_typesAlert">{errors.diets}</div>
              )}
            </div>
            <label className="form_labels label_types" htmlFor="cuisines">Cuisine:</label>
            <select
              className="input_form  selector_types"
              name="cuisines"
              id="cuisines"
              value={newRecipe.actual_cuisines}
              onChange={handleOnChange}
            >
              <option value="">Select one or more Cuisines</option>
              {allCuisines &&
                allCuisines.map((cuisine) => {
                  return (
                    <option key={cuisine.id} value={cuisine.cuisine}>
                      {cuisine.cuisine}
                    </option>
                  );
                })}
            </select>
            <div  className="types_container">
              {newRecipe.cuisines.length > 0 ? (
                newRecipe.cuisines.map((cuisine) => {
                  return (
                    <div 
                      className="types_inside"
                      key={cuisine}
                      id="cuisines"
                      onDoubleClick={handleDeleteTypes}
                    >
                      {cuisine}
                    </div>
                  );
                })
              ) : (
                <div className="errors_alert errors_typesAlert">{errors.cuisines}</div>
              )}
            </div>
            <label className="form_labels label_types" htmlFor="dishTypes">Dish:</label>
            <select
              className="input_form  selector_types"
              name="dishTypes"
              id="dishTypes"
              value={newRecipe.actual_dishTypes}
              onChange={handleOnChange}
            >
              <option value="">Select one or more DishTypes</option>
              {allDishTypes &&
                allDishTypes.map((dishType) => {
                  return (
                    <option key={dishType.id} value={dishType.dishType}>
                      {dishType.dishType}
                    </option>
                  );
                })}
            </select>
            <div  className="types_container">
              {newRecipe.dishTypes.length > 0 ? (
                newRecipe.dishTypes.map((dishType) => {
                  return (
                    <div
                      className="types_inside"
                      key={dishType}
                      id="dishTypes"
                      onDoubleClick={handleDeleteTypes}
                    >
                      {dishType}
                    </div>
                  );
                })
              ) : (
                <div className="errors_alert errors_typesAlert">{errors.dishTypes}</div>
              )}
            </div>
            <div className="types_footer">To unselect a type just Double Click on it</div>
          </section>
          <section className="form_sections" id="section_checkbox">
            <div className="check_container">
            <label htmlFor="vegetarian">Vegetarian:</label>
            <input
              className="check_form"
              type="checkbox"
              name="vegetarian" //vegetarian
              checked={newRecipe.vegetarian}
              onChange={handleOnChange}
            />
            </div>
            <div className="check_container">
            <label htmlFor="vegan">Vegan:</label>
            <input
              className="check_form"
              type="checkbox"
              name="vegan" //vegan
              checked={newRecipe.vegan}
              onChange={handleOnChange}
            />
            </div>
            <div className="check_container">
            <label htmlFor="glutenFree">Gluten Free</label>
            <input
              className="check_form"
              type="checkbox"
              name="glutenFree" //glutenFree
              checked={newRecipe.glutenFree}
              onChange={handleOnChange}
            />
            </div>
          </section>
          <section className="form_sections" id="section_btns">
            <input
              className="btn_form"
              id="btn_reset"
              type="button"
              value="Reset"
              onClick={handleReset}
            />
            <input
              className="btn_form"
              id="btn_submit"
              type="submit"
              value="Send Recipe"
              disabled={disableSubmit}
              onClick={handleSubmit}
            />
          </section>
        </form>
      </div>
    </div>
  );
}
