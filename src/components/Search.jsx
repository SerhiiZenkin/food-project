import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const Search = ({callback=Function.prototype}) => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callback(value)
  };

  return (
    <Box sx={{ mt: 5, mx: "auto", width: "60%", fontSize: 60 }}>
      <TextField
        id="filled-basic"
        label="Search some food"
        variant="filled"
        fullWidth
        onChange={(event)=> setValue(event.target.value) }
        value={value}
        onKeyDown={handleSubmit}
      />
    </Box>
  );
};

export default Search;
