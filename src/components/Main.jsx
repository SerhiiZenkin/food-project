import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { getMealByCategories } from "../api";
import Preloader from "./Preloader";
import CategoryList from "./CategoryList";

const Main = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getMealByCategories().then(data => {
      setCatalog(data.categories)
    })
  }, [])

  return (
    <Container sx={{ mt: 2, py: 1 }}>
      <main>
        {!catalog.length ? <Preloader /> : (<CategoryList catalog={catalog} />)}
      </main>
    </Container>
  );
};

export default Main;
