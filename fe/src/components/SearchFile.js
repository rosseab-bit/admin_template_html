import "./ComponentsStyles.css";
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

const SearchFile = () => {
  return (
    <>
      <div className="container-search">
        <ThemeProvider theme={theme}>
          <TextField
            className="input-search"
            id="standard-basic"
            label="Buscar archivo"
            variant="standard"
          />
        </ThemeProvider>
        <Button className="search-button" variant="outlined">
          Buscar
        </Button>
      </div>
    </>
  );
};
export default SearchFile;
