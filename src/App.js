import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import NotFound from "./pages/NotFound";
import Main from "./components/Main";
import Home from "./pages/Home";
import Category from "./components/Category";
import FoodCategory from "./components/FoodCategory";
import Recipe from "./pages/Recipe";
import { createTheme, ThemeProvider } from "@mui/material";


function App() {

const [mode, setMode] = React.useState("light");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});

  return (
<ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<MainLayout setMode={setMode} mode={mode}/>}>
            <Route index={true} element={<Home />} />
            <Route path="meals" element={<Main />}>
              <Route index={true} element={<Category />} />
            </Route>
            <Route path="coctails" element= {<Home/>} />
            <Route path="category/:route" element={<FoodCategory />} />
            <Route path="meals/:id" element={<Recipe/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
</ThemeProvider>

  );
}

export default App;
