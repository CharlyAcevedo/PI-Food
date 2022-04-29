import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from "./recipeCard";
import { getAllRecipes, recipesOrderAndFilter } from "../../redux/actions";
import './styles/cardcontainer.css'

export default function CardContainer() {
  const dispatch = useDispatch();

  const recipesToShow = useSelector((state) => state.recipesToShow);
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
    <div className="card_container">
      {recipesToShow.length &&
        recipesToShow.map((recipe) => {
          return (
            <div key={recipe.id}>
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                diets={recipe.diets}
              />
            </div>
          );
        })}
    </div>
  );
}