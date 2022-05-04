import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cafehumo from "../../asets/img/cafehumo.gif";
import { getAllRecipes, getAllTypes, createRecipe } from "../../redux/actions";
import { testDisableSubmit, validateForm } from "./controlers/controlers";

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

  let regexId = /^DBC-[0-9]/;
  const createdRecipes = allRecipes.filter((recipe) => {
    return regexId.test(recipe.id);
  });
  const newId =
    createdRecipes.length < 10
      ? `BDC-00${createdRecipes.length + 1}`
      : createdRecipes.length < 100
      ? `BDC-0${createdRecipes.length + 1}`
      : `BDC-${createdRecipes.length + 1}`;

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
    actualCuisine: "",
    dishTypes: [],
    actualDishType: "",
    diets: [],
    actualDiet: "",
  });

  const [errors, setErrors] = useState({
    name: "Title must have at least 3 characters, which can only be letters or numbers",
    summary: "You must write a sentence with a minimum of three words",
    score: "You must write a number between 1 and 100",
    healthScore: "You must write a number between 1 and 100",
    image: "A valid HTML address must be entered for the image",
    step: "Step must be a sentence with at least 3 words",
    steps: "At least one step must be written, and it must be a sentence with at least 3 words",
    cuisines: "At least one type of cuisine must be selected",
    dishTypes: "At least one type of dish type must be selected",
    diets: "At least one type of diet must be selected",
  });

  const [disableSubmit, setDisableSubmit] = useState(true);

  function handleOnChange(e) {
    if(validateForm(e.target.name, e.target.value)){     
        setErrors((prevState) => {        
          return {
            ...prevState,
            [e.target.name]: ''
          }
        })
    } else {
      switch(e.target.name){
        case 'name':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'Title must have at least 3 characters, which can only be letters or numbers'
            }
          });
          break
        case 'summary':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'You must write a sentence with a minimum of three words'
            }
          });
          break
        case 'image':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'A valid HTML address must be entered for the image'
            }
          });
          break
        case 'score':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'You must write a number between 1 and 100'
            }
          });
          break
        case 'healthScore':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'You must write a number between 1 and 100'
            }
          });
          break
        case 'steps':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'At least one step must be written, and it must be a sentence with at least 3 words'
            }
          });
          break
        case 'diets':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'At least one type of diets must be selected'
            }
          });
          break
        case 'cuisines':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'At least one type of cuisine must be selected'
            }
          });
          break
        case 'dishTypes':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: 'At least one type of dish type must be selected'
            }
          });
          break
        case 'step':
          setErrors((prevState) => {
            return {
              ...prevState,
              [e.target.name]: "Step must be a sentence with at least 3 words",
            }
          });
          break
        default:
          break
      }
    }
    if(e.target.name === 'vegetarian' || e.target.name === 'vegan' || e.target.name === 'glutenFree') {
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.checked,
        }
      })  
    } else if (e.target.name === 'step') {
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          actualStep: {
            ...prevState.actualStep,
            step: e.target.value
          }
        }
      })
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
    console.log(testDisableSubmit(errors))
    setDisableSubmit(testDisableSubmit(errors));
  }

  function handleAddStep(e){
    e.preventDefault();
    if(validateForm('step', newRecipe.actualStep.step)){
      console.log('llega hasta aqui', validateForm('step', newRecipe.actualStep.step))
      setDisableSubmit(testDisableSubmit(errors));
      setNewRecipe((prevState) => {
        const newStepNumber = prevState.actualStep.number + 1
        const newStep = prevState.actualStep
        return {
          ...prevState,
          steps: [...prevState.steps, newStep],
          actualStep: {
            number: newStepNumber,
            step: ""
          }
        };
      });
      setErrors((prevState) => {
        return {
          ...prevState,
          step: "Step must be a sentence with at least 3 words",
          steps: ""
        }
      });
    };
  };

  function handleReset() {
    setDisableSubmit(true)
    setErrors({
    name: "Title must have at least 3 characters, which can only be letters or numbers",
    summary: "You must write a sentence with a minimum of three words",
    score: "You must write a number between 1 and 100",
    healthScore: "You must write a number between 1 and 100",
    image: "A valid HTML address must be entered for the image",
    step: "Step must be a sentence with at least 3 words",
    steps: "At least one step must be written, and it must be a sentence with at least 3 words",
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
    })
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let recipeToCreate = {
      "id": newRecipe.id,
      "name": newRecipe.name,
      "summary": newRecipe.summary,
      "score": newRecipe.score,
      "healthScore": newRecipe.healthScore,
      "image": newRecipe.image,
      "vegetarian": newRecipe.vegetarian,
      "vegan": newRecipe.vegan,
      "glutenFree": newRecipe.glutenFree,
      "steps": newRecipe.steps,
      "cuisines": newRecipe.cuisines,
      "dishTypes": newRecipe.dishTypes,
      "diets": newRecipe.diets,
  }    
    dispatch(createRecipe(recipeToCreate));
    // await axios.post('/recipe', {recipeToCreate})
    
    handleReset();
  }

  return (
    <div className="form_page_container">
      <img className="back_image" src={cafehumo} alt="cafe humeante" />
      <div className="form_container">
        <form action="">
          <section className="form_sections" id="section_title">
            <label className="form_labels" htmlFor="name">
              Please, write a Title for your recipe:
            </label>
            <input
              className="input_form"
              type="text"
              name="name" //name
              value={newRecipe.name}
              onChange={handleOnChange}
            />
            {errors.name.length > 0 ? (
              <div className="errors_alert">{errors.name}</div>
            ) : (
              <div className="ok_alert">Title is OK</div>
            )}
          </section>
          <section className="form_sections" id="section_summary">
            <label className="form_labels" htmlFor="summary">
              Summary:
            </label>
            <textarea
              className="form_textArea"
              name="summary" //summary
              rows="4"
              cols="50"
              value={newRecipe.summary}
              onChange={handleOnChange}
            ></textarea>
            {errors.summary.length > 0 ? (
              <div className="errors_alert">{errors.summary}</div>
            ) : (
              <div className="ok_alert">Sumary is OK</div>
            )}
          </section>
          <section className="form_sections" id="section_inputs">
            <label htmlFor="image">Image:</label>
            <input
              className="input_form"
              type="text"
              name="image" //image
              value={newRecipe.image}
              onChange={handleOnChange}
            />
            {errors.image.length > 0 ? (
              <div className="errors_alert">{errors.image}</div>
            ) : (
              <div className="ok_alert">Image URL is OK</div>
            )}
            <label htmlFor="score">Score:</label>
            <input
              className="input_form"
              type="text"
              name="score" //score
              value={newRecipe.score}
              onChange={handleOnChange}
            />
            <label htmlFor="healthScore">Healt Score:</label>
            <input
              className="input_form"
              type="text"
              name="healthScore" //healthScore
              value={newRecipe.healthScore}
              onChange={handleOnChange}
            />
          </section>
          <section className="form_sections" id="section_checkbox">
            <label htmlFor="vegetarian">Vegetarian:</label>
            <input
              className="check_form"
              type="checkbox"
              name="vegetarian" //vegetarian
              checked={newRecipe.vegetarian}
              onChange={handleOnChange}
            />
            <label htmlFor="vegan">Vegan:</label>
            <input
              className="check_form"
              type="checkbox"
              name="vegan" //vegan
              checked={newRecipe.vegan}
              onChange={handleOnChange}
            />
            <label htmlFor="glutenFree">Gluten Free</label>
            <input
              className="check_form"
              type="checkbox"
              name="glutenFree" //glutenFree
              checked={newRecipe.glutenFree}
              onChange={handleOnChange}
            />
          </section>
          <section className="steps_container" id="section_steps">
            <label htmlFor="step">Steps</label>
            <input
              className="input_form"
              name="number" //steps.number
              type="text"
              value={newRecipe.actualStep.number}
              readOnly
            />
            <textarea
              className="input_form"
              name="step" //steps.step
              id="step"
              cols="50"
              rows="2"
              value={newRecipe.actualStep.step}
              onChange={handleOnChange}
            ></textarea>
            <button
              className="btn_form"
              id="btn_addStep"
              disable={errors.step.length > 0 ? "true" : "false"}
              onClick={handleAddStep}
            >
              Add Step
            </button>
            <div className="steps_container">
              {newRecipe.steps.length > 0 ? (
                newRecipe.steps.map((step) => {
                  return (
                    <div key={step.number}>
                      {step.number}.- {step.step}
                    </div>
                  );
                })
              ) : (
                <div className="alert_msg">{errors.steps}</div>
              )}
            </div>
          </section>
          <section className="form_sections" id="section_types">
            <label htmlFor="diets">Diet</label>
            <select
              className="input_form"
              name="diets"
              id="diets"
              value={newRecipe.actualDiet}
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
            <div>
              {newRecipe.diets.length > 0 ? (
                newRecipe.diets.map((diet) => {
                  return <div key={diet}>{diet}</div>;
                })
              ) : (
                <div className="alert_msg">{errors.diets}</div>
              )}
            </div>
            <label htmlFor="cuisines">Cuisine</label>
            <select
              className="input_form"
              name="cuisines"
              id="cuisines"
              value={newRecipe.actualCuisine}
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
            <div>
              {newRecipe.cuisines.length > 0 ? (
                newRecipe.cuisines.map((cuisine) => {
                  return <div key={cuisine}>{cuisine}</div>;
                })
              ) : (
                <div className="alert_msg">{errors.cuisines}</div>
              )}
            </div>
            <label htmlFor="dishTypes">DishType</label>
            <select
              className="input_form"
              name="dishTypes"
              id="dishTypes"
              value={newRecipe.actualDishType}
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
            <div>
              {newRecipe.dishTypes.length > 0 ? (
                newRecipe.dishTypes.map((dishType) => {
                  return <div key={dishType}>{dishType}</div>;
                })
              ) : (
                <div className="alert_msg">{errors.dishTypes}</div>
              )}
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
