import React from 'react';
import NavDetails from '../components/navs/navDetails'
import RecipeCreateForm from '../components/createRecipe/recipeCreate';

export default function CreateRecipe(){

    return (
        <div>
            <NavDetails/>
            <RecipeCreateForm/>
        </div>
    )
}