import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, recipesOrderAndFilter } from "../../redux/actions";
import RecipeCard from "./recipeCard";
import backImg from "../../asets/img/sirvecerveza.gif"
import loading from "../../asets/img/ensaladaprepara.gif"
import './styles/cardcontainer.css'
import { Link } from "react-router-dom";

export default function CardContainer() {
  const dispatch = useDispatch();

  const recipesToShow = useSelector((state) => state.pageToShow);
  const currentOrderState = useSelector((state) => state.currentOrder);
  const currentFilterState = useSelector((state) => state.currentFilter);

  const [currentOrderLocale, setCurrentOrderLocale] = useState({
    prop: "name",
    value: "ASC",
  });
  const [currentFilterLocale, setCurrentFilterLocale] = useState({
    prop: "name",
    value: "all",
  });

  useEffect(() => {
    dispatch(
      recipesOrderAndFilter({
        order: currentOrderLocale.value,
        orderBy: currentOrderLocale.prop,
        filter: currentFilterLocale.value,
        field: currentFilterLocale.prop
      })
    );
    dispatch(getAllRecipes()); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCurrentOrderLocale(currentOrderState);
    setCurrentFilterLocale(currentFilterState)
  }, [currentOrderState, currentFilterState]);

  return (
    <div>
      <div className="main_title">The International Cuisine's App</div>
      <img className="back_image" src={backImg} alt="Sirve cerveza" />
      <div className="card_container">
        {recipesToShow.length ?
          recipesToShow.map((recipe) => {
            return (
              <div className="cards" key={recipe.id}>
                <Link className="card_link" to={`/details/${recipe.id}`} >
                <RecipeCard
                  key={recipe.id}
                  image={recipe.image}
                  name={recipe.name}
                  diets={recipe.diets}
                />
                </Link>
              </div>
            );
          }) : <img src={loading} alt="loading..." />
        }
      </div>
    </div>
  );
}