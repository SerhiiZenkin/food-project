import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h2" component="h4" sx={{color:"lightblue"}}>
        Your page is not Found
      </Typography>
    </Container>
  );
};

export default NotFound;
