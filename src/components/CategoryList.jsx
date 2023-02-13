import Grid from "@mui/material/Grid";
import Category from "./Category";

const CategoryList = ({ catalog = [] }) => {
  return (
    <>
      <Grid container spacing={2}>
        {catalog.map((item) => (
          <Category key={item.idCategory} {...item} />
        ))}
      </Grid>
    </>
  );
};

export default CategoryList;
