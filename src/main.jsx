import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme } from './theme/light.js'
import { darkTheme } from './theme/dark.js'
import { ThemeProviderContext, useAppTheme } from './contexts/ThemeContext.jsx'

const queryClient = new QueryClient();

const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID


const ThemedApp = () => {
    const { mode } = useAppTheme();
    const theme = mode === 'light' ? lightTheme : darkTheme;
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    );
  };

createRoot(document.getElementById('root')).render(
        <GoogleOAuthProvider clientId={clientID}>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                   <ThemeProviderContext>
                        <ThemedApp/>
                   </ThemeProviderContext>
                </QueryClientProvider>
            </AuthProvider>
        </GoogleOAuthProvider>
)
