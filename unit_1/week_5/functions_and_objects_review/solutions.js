// 9. Write a function that takes in an array of
// Recipe objects and returns an array containing 
// all the ingredients you need to make all of 
// the recipes.
let recipes = [
  {
    name: "Cheeseburger Tomatoes",
    ingredients: ["Ground Beef", "Yellow Onion", "Garlic", "Cheddar Cheese", "Pickles", "Lettuce", "Ketchup", "Mustard", "Salt", "Pepper"],
    minutes: 30
  },
  {
    name: "Mac n' Cheese",
    ingredients: ["Macaroni", "Milk", "Bacon", "Breadcrumbs", "Unsalted Butter", "Mustard", "Cheddar Cheese", "Flour", "Salt", "Pepper"],
    minutes: 90
  },
  {
    name: "Tomato Sauce",
    ingredients: ["Garlic", "Yellow Onion", "Red Pepper Flakes", "Oregano", "Tomato Paste", "San Marzano Tomatoes", "Basil", "Unsalted Butter", "Salt", "Pepper"],
    minutes: 120
  }
]

const getAllIngredients = (recipes) => {
 let allIngredients = []

  // Loop as many time as elements in recipes

  // Total time complexity is O(n * m). Where n is the length of the
  // recipes array and m is the length of the the longest array of 
  // ingredients
  recipes.forEach(recipe => { // O(n)
    allIngredients = allIngredients.concat(recipe.ingredients) // O(m)
  })

  // 3 recipes
  // 3 ingredients per recipe
  // (n * m) => (3 * 3) => 9 // allIngredients
  // x = (n * m)
  let uniqueIngredients = []
  for(let crrIngredient of allIngredients) { // O(x) => O(n * m)
  // if(!uniqueIngredients.includes(crrIngredient)) { //Check if ingredient is already in uniqueIngredients
    // O(n * m)
    if(uniqueIngredients.includes(crrIngredient) === false) { //Check if ingredient is already in uniqueIngredients
      uniqueIngredients.push(crrIngredient)
    }
  }
  // (n * m) * (n * m) => O(n^2 * m^2)
  // O(x^2)
  // O(x**2)
  return uniqueIngredients
}


let myIngredients = getAllIngredients(recipes)
// console.log(myIngredients)
// Remove duplicate ingredients from the final array

// 10. Write a function that takes in an array
// of Recipe objects and an array of ingredients 
// and returns all the recipes that you are able
// to make.

const doIHaveAllIngredientsForRecipe = (recipe, allIngredients) => {
  return recipe.ingredients.every(crrIng => {
    return allIngredients.includes(crrIng)
  })
}

//doIHaveAllIngredientsForRecipe(recipes[0], myIngredients)

const checkMyIngredients = (recipes, ingredients) => {
   let filteredRecipes = recipes.filter(recipe => { // O(n)

    // O(m * (n * m)) => O(nm * m^2)
     if(doIHaveAllIngredientsForRecipe(recipe, ingredients)) { 
       return true
     } else {
       return false
     }
   })
   return filteredRecipes
}

myIngredients.pop()
let answer = checkMyIngredients(recipes, myIngredients)
console.log(answer)

