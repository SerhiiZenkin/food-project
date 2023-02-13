import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Preloader from "../components/Preloader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setReciepe] = useState({});

  useEffect(() => {
    getMealById(id).then((data) => setReciepe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <Paper
          elevation={4}
          sx={{
            width: "90%",
            mx: "auto",
            my: 2,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "80%",
              // mx: "auto",
              // my: 2,
              position: "relative",
            }}
          >
            <Typography variant="h4" component="h2" paddingY={2}>
              {recipe.strMeal}
            </Typography>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              sx={{ width: "50%", position: "absolute" }}
            />
            {recipe.strArea ? <h4> Cousine {recipe.strArea}</h4> : null}

            <Accordion paddingY={2}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h4"> RECEIPE </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{recipe.strInstructions}</Typography>
              </AccordionDetails>
            </Accordion>
            {recipe.strYoutube ? (
              <>
                <Typography margin={2} variant="h5"> Video Receipe </Typography>
                <Box sx={{ mt: 2, maxWidth: 600 }}>
                   <iframe width="560" height="315" src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

                </Box>
              </>
            ) : null}
          </Box>
        </Paper>
      )}
    </>
  );
};

export default Recipe;
