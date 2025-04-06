import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";


const theme = createTheme({
  palette: {
    primary: {
      main: '#7AA899',
    },
    secondary: {
      main: '#27263D',
    },
    error: {
      main: '#8B7AA8',
    },
    info: {
      main: '#3B3A3D',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router}/>
    </ThemeProvider>
  )
}

export default App
