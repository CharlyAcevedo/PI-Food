
export function initialNormalize(array) {
  let recipesNormalized = array.map(recipe => {
    if(typeof recipe.diets[0] !== 'string'){
      let newDiets = [];
      const count = recipe.diets.length
      for(let i = 0; i < count; i++){
        newDiets.push(recipe.diets[i].diet_name)
      }
      recipe.diets = newDiets 
    }
    if(typeof recipe.cuisines[0] !== 'string'){
      let newCuisines = [];
      const count = recipe.cuisines.length
      for(let i = 0; i < count; i++){
        newCuisines.push(recipe.cuisines[i].cuisine)
      }
      recipe.cuisines = newCuisines
    }
    if(typeof recipe.dishTypes[0] !== 'string'){
      let newdishTypes = [];
      const count = recipe.dishTypes.length
      for(let i = 0; i < count; i++){
        newdishTypes.push(recipe.dishTypes[i].dishType)
      }
      recipe.dishTypes = newdishTypes
    }
    return recipe
  })
  return recipesNormalized
}



export function filtersAndOrders(
  array,
  field,
  filter,
  order,
  orderBy
) {
  // console.log(filter, field)
  let newArray =
    filter === "all" || filter === ""
      ? array
      : field === "name"
      ? array.filter((recipe) => {
          return recipe.name.toLowerCase().includes(filter.toLowerCase());
        })
      : field === "dbCreated" 
      ? array.filter((recipe) => {
        if(filter === 'true'){
          // console.log('paso en true', filter)
          return recipe.dbCreated
        } else if(filter === 'false'){
          // console.log('paso en false', filter)
          return !recipe.dbCreated
        }
        return recipe        
      } ) :
      array.filter((recipe) => {
          return recipe[field].includes(filter);
        });
  newArray =
    order === "ASC"
      ? newArray.sort((a, b) => {
        if (a[orderBy] > b[orderBy]) {
          return 1;
        }
        if (a[orderBy] < b[orderBy]) {
          return -1;
        }
        return 0;
      })
      : newArray.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
          return 1;
        }
        if (a[orderBy] > b[orderBy]) {
          return -1;
        }
        return 0;
      });      
  return newArray;
}
