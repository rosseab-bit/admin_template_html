import "./ComponentsStyles.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#A2A2A2", // Cambia el color principal
    },
    secondary: {
      main: "#ff9100", // Cambia el color secundario
    },
  },
});

const SearchFile = ({showModalLoad, setShowModalLoad, searchFile, setSearchFile}) => {
  console.log({searchFile});
  const handleChangeField = (e) => {
    setSearchFile(e.target.value);
  }
  return (
    <>
    <div className="container-search">
        <ThemeProvider theme={theme}>
          <TextField
            className="input-search"
            id="standard-basic"
            label="Buscar archivo"
	  variant="standard"
	  value={searchFile}
	  onChange={handleChangeField}
          />
        </ThemeProvider>
        <Button className="search-button" variant="outlined">
          Buscar
        </Button>
	<Button className="search-button" variant="outlined" onClick={() => setShowModalLoad(true)}>
          Cargar 
        </Button>
      </div>
    </>
  );
};
export default SearchFile;
