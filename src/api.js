const urlById = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const urlByCategories = "https://www.themealdb.com/api/json/v1/1/categories.php";
const urlFilterByCat = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const getMealById = async (mealId) => {
  const response = await fetch(urlById + `${mealId}`)
  return await response.json()
};

const getMealByCategories = async () => {
  const response = await fetch(urlByCategories)
  return await response.json()
};

const getFilteredCategories = async (category) => {
  const response = await fetch (urlFilterByCat + `${category}`)
  return await response.json();
}


export {getMealById, getMealByCategories, getFilteredCategories}