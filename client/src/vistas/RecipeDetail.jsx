import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipeDetail } from '../redux/actions/index';
import Details from '../components/details/details';
import NavDetails from '../components/navs/navDetails';
import './styles/RecipeDetail.css'

export default function RecipeDetail(props){
    const id = props.match.params.id;
    console.log('desde vistas', id)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getRecipeDetail(id));
    },[dispatch,id])

    return(
        <div className='recipe_details_container'>
            <NavDetails />
            <Details id={id}/>
        </div>
    )
}