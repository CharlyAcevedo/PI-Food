import React from "react";
import { useSelector } from "react-redux";
import ensaladaprepara from '../../asets/img/ensaladaprepara.gif'
import batehuevo from "../../asets/img/batehuevo.gif";
import "./styles/details.css";

export default function Details() {
  const recipeData = useSelector((state) => state.recipeDetails);

  return (
    <div className="main_container">
      <img className="back_image" src={batehuevo} alt="batehuevo" />
      {recipeData ? (
        <>
          <img className="main_image" src={recipeData.image} alt="The Recipe" />
          <h1 className="main_title_details">{recipeData.name}</h1>
          <div className="symary_container">
            <h3>Sumary</h3>
            <p
              className="summary"
              dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            />
          </div>
          <div className="steps_container">
            <h3 className="steps_title">Preparation steps</h3>
            <div className="inher_container_steps">
              {recipeData.steps ? (
                recipeData.steps.map((step) => {
                  return (
                    <div className="step_inher" key={step.number}>
                      <div>{step.number}.-</div>
                      <div>{step.step}</div>
                    </div>
                  );
                })
              ) : (
                <div>There are no steps listed for this recipe</div>
              )}
            </div>
          </div>
          <div className="diets_container">
            <h3 className="types_titles">Diet Types</h3>
            <div className="inher_container_diets">
            {
              recipeData.diets && recipeData.diets.map(diet => {
                return (<div className="step_inher" key={diet}>{diet}</div>)
              })
            }
          </div>
          </div>
          <div className="diets_container">
            <h3 className="types_titles">Cuisine Types</h3>
            <div className="inher_container_diets">
            {
              recipeData.cuisines && recipeData.cuisines.map(cuisine => {
                return (<div className="step_inher" key={cuisine}>{cuisine}</div>)
              })
            }
          </div>
          </div>
          <div className="diets_container">
            <h3 className="types_titles">Dish Types</h3>
            <div className="inher_container_diets">
            {
              recipeData.dishTypes && recipeData.dishTypes.map(dishType => {
                return (<div className="step_inher" key={dishType}>{dishType}</div>)
              })
            }
          </div>
          </div>
          <div className="extras_container">
            <h3 className="extras_titles">Aditional Info</h3>
            <div className="inher_container_extras scores">
            <div>Score: {recipeData.score}</div>
            <div>Healt Score: {recipeData.healthScore}</div>
            </div>
            <div className="inher_container_extras others">
            <div>Vegetarian: {recipeData.vegetarian ? <input readOnly checked type="checkbox"/> : <input type="checkbox"/>}</div>
            <div>Vegan: {recipeData.vegan ? <input readOnly checked type="checkbox"/> : <input type="checkbox"/>}</div>
            <div>Gluten Free: {recipeData.glutenFree ? <input readOnly checked type="checkbox"/> : <input type="checkbox"/>}</div>
          </div>
          </div>
        </>
      ) : (
        <img className="image_loading" src={ensaladaprepara} alt="loading..." />
      )}
    </div>
  );
}
