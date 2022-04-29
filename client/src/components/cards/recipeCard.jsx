import React from "react";
import './styles/recipeCard.css'

export default function RecipeCard({ image, name, diets }) {

  const dietsToShow = diets.join(' - ')

  return (
    <figure className="recipe_card">
      <img src={image} alt={name} className="card_image"></img>
      <figcaption className="card_name">{name}</figcaption>
      <figcaption className="card_diets">{dietsToShow}</figcaption>
    </figure>
  );
};
