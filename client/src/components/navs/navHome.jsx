import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTypes, recipesOrderAndFilter, searchRecipe } from '../../redux/actions/'
import corazon from "../../asets/img/corazon.gif";
import arrow from "../../asets/icons/arrow.svg";
import search from '../../asets/icons/search.svg';
import "./styles/navHome.css";

export default function NavHome() {

  const dispatch = useDispatch();

  const allDiets = useSelector(state => state.allDiets);
  const allCuisines = useSelector(state => state.allCuisines);
  const allDishTypes = useSelector(state => state.allDishTypes);
  const currentOrder = useSelector(state => state.currentOrder);
  const currentFilter = useSelector(state => state.currentFilter);

  
  const [currentOrderLocale, setCurrentOrderLocale] = useState('ASC');
  const [currentOrderByLocale, setCurrentOrderByLocale] = useState('name');
  const [currentSearch, setCurrentSearch] = useState('')

  useEffect(() => {
    dispatch(getAllTypes())
  },[dispatch])

  const handleOrder = (e) => {
    if(e.target.name === 'order'){
      let payload = {
        order: e.target.value,
        orderBy: currentOrderByLocale
      };
      setCurrentOrderLocale(e.target.value)
      dispatch(recipesOrderAndFilter(payload));
    } else if(e.target.name === 'orderBy'){
      let payload = {
        order: currentOrderLocale,
        orderBy: e.target.value
      };
      setCurrentOrderByLocale(e.target.value)
      dispatch(recipesOrderAndFilter(payload));
    }
  };

  const handleFilter = (e) => {
    let payload = {
      field: e.target.name,
      filter: e.target.value,
    };
    dispatch(recipesOrderAndFilter(payload));
  };

  const handleChange = (e) => {
    e.preventDefault();
    if(e.target.value === '') {
      setCurrentSearch(e.target.value)
    } else {
      setCurrentSearch(e.target.value)
      dispatch(searchRecipe(e.target.value))
    }
  }

  return (
    <nav className="nav_home">
      <section className="nav_logo_container">
        <img src={corazon} alt="" className="nav_logo" />
        <ul className="links_container">
          <li className="nav_list">
            <Link className="nav_link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link className="nav_link" to="/create_recipe">Create Recipe</Link>
          </li>
          <li className="nav_list nav_list--show">
            <p className="nav_link">
              Order
              <img className="menu_arrow" src={arrow} alt="an arrow" />
            </p>
            <ul className="nav_nesting_menu">
              <li className="nav_link list_inside">
                Order:
                <select
                  onChange={(e) => handleOrder(e)}
                  className="select_nav"
                  name="order"
                  value={currentOrder.value}
                >
                  <option value="ASC">Ascendant</option>
                  <option value="DESC">Descendant</option>
                </select>
              </li>
              <li className="nav_link list_inside">
                Order By:
                <select
                  onChange={(e) => handleOrder(e)}
                  className="select_nav"
                  name="orderBy"
                  value={currentOrder.prop}
                >
                  <option value="name">Title</option>
                  <option value="score">Score</option>
                  <option value="healthScore">Healt Score</option>
                </select>
              </li>
            </ul>
          </li>
          <li className="nav_list">
          <p className="nav_link">
              Filter
              <img className="menu_arrow" src={arrow} alt="an arrow" />
            </p>
            <ul className="nav_nesting_menu">
              <li className="nav_link list_inside">
                Diet:
                <select
                  onChange={(e) => handleFilter(e)}
                  className="select_nav"
                  name="diets"
                  value={currentFilter.prop === 'diets' ? currentFilter.value : 'all'}
                >
                  <option value='all'>All Diets</option>
                  {
                    allDiets && allDiets.map(diet => {
                      return (
                        <option key={diet.id} value={diet.diet_name}>{diet.diet_name}</option>
                      )
                    })
                  }
                </select>
              </li>
              <li className="nav_link list_inside">
                Cuisine:
                <select
                  onChange={(e) => handleFilter(e)}
                  className="select_nav"
                  name="cuisines"
                  value={currentFilter.prop === 'cuisines' ? currentFilter.value : 'all'}
                >
                  <option value='all'>All Cuisines</option>
                  {
                    allCuisines && allCuisines.map(cuisine => {
                      return (
                        <option key={cuisine.id} value={cuisine.cuisine}>{cuisine.cuisine}</option>
                      )
                    })
                  }
                </select>
              </li>
              <li className="nav_link list_inside">
                Dish Type:
                <select
                  onChange={(e) => handleFilter(e)}
                  className="select_nav"
                  name="dishTypes"
                  value={currentFilter.prop === 'dishTypes' ? currentFilter.value : 'all'}
                >
                  <option value='all'>All Dish Types</option>
                  {
                    allDishTypes && allDishTypes.map(dishType => {
                      return (
                        <option key={dishType.id} value={dishType.dishType}>{dishType.dishType}</option>
                      )
                    })
                  }
                </select>
              </li>
            </ul>
          </li>
        </ul>
        <input onChange={(e) => handleChange(e)} className='nav_input' type="search" value={currentSearch}/>
        <img className='img_search' src={search} alt='search' />       
      </section>
    </nav>
  );
}
