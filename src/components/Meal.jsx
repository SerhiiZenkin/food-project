import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from "@mui/icons-material/Share";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const Meal = (props) => {
  const { idMeal, strMeal, strMealThumb } = props;
  
  const myHover = {
      "&:hover": {
        border: "1px solid #00FF00",
        color: 'gray',
        backgroundColor: 'lightblue'
      },
    };

  return (
    <Grid item xs={12} sm={6} md={4} sx={{ myHover }} >
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader title={strMeal} subheader="do it yourself" />
        <CardMedia
          component="img"
          height="194"
          image={strMealThumb}
          alt={strMeal}
        />
        <CardContent>
        </CardContent>
        <Checkbox icon={<FavoriteBorder />} checkedIcon= {<Favorite sx={{color:"red"}} />} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          sx={{ color: "primary.secondary" }}
          variant="outlined"
          endIcon={<SearchSharpIcon />}
        >
          <Link to={`/meals/${idMeal}`}>Find the recipe</Link>
        </Button>
      </Card>
    </Grid>
  );
};

export default Meal;
