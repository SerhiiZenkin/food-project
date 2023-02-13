import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Category = (props) => {
  const {strCategoryThumb, strCategory, strCategoryDescription } =
    props;
  return (
    <Grid item xs={12} sm={6} md={4} sx={{flexGrow:1}}>
      <Card sx={{ maxWidth: 345}}>
        <CardHeader
          title={strCategory}
          subheader="enjoy your favorite dishes"
        />
        <CardMedia
          component="img"
          height="194"
          image={strCategoryThumb}
          alt={strCategory}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {strCategoryDescription.slice(0, 120)} 
            {"..."}
          </Typography>
        </CardContent>
        <Button sx={{color:"primary.secondary" }} variant="outlined" endIcon={<SearchSharpIcon />}>
          <Link to={`/category/${strCategory}`}> 
          More of the Food category
          </Link>
        </Button>
      </Card>
    </Grid>
  );
};

export default Category;
