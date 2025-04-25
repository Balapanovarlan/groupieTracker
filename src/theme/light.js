import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background:{
        default: 'white',
        paper: '#f5f5f5',
    },
    color:{
        default: 'black',
    }
  },
  typography: {
    fontFamily: "Raleway",
  },
});

