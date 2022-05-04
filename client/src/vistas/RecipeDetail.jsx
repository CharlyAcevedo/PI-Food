import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail } from '../redux/actions/index';
import Details from '../components/details/details';
import NavDetails from '../components/navs/navDetails';
import loading from '../asets/img/ensaladaprepara.gif'
import './styles/RecipeDetail.css'

export default function RecipeDetail(props){
    const id = props.match.params.id;
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getRecipeDetail(id));
    },[dispatch,id])

    const recipeDetails = useSelector((state) => state.recipeDetails)

    return (
      <div className="recipe_details_container">
        <NavDetails />
        {String(id) === String(recipeDetails.id) ? (
          <Details id={id} />
        ) : (
          <img className="image_loading" src={loading} alt="loading..." />
        )}
      </div>
    );
}