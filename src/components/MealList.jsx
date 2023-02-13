import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Meal from "./Meal";

const MealList = ({meals}) => {
  return (
    <Container sx={{ mt: 2, py: 1 }}>
     <Grid container spacing={2}>
       { meals.map(meal=>( 
           <Meal key={meal.idMeal} {...meal}/>
       ))}
     </Grid>
     </Container>
  )
}

export default MealList