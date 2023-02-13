import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = ({setMode, mode}) => {
  return (
    <Box bgcolor={"background.default"} sx={{minHeight: "100vh", height: "100%"}}>
      <Header setMode={setMode} mode={mode}/>
      <Outlet />
    </Box>
  ); 
};

export default MainLayout;
