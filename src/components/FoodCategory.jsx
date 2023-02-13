import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategories } from "../api";
import Preloader from "./Preloader";
import MealList from "./MealList";

const FoodCategory = () => {
  const [meals, setMeals] = useState([]);
  const { route } = useParams();

  useEffect(() => {
    getFilteredCategories(route).then((data) => setMeals(data.meals));
  }, []);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
};

export default FoodCategory;
