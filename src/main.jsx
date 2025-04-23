import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './contexts/AuthContext.jsx'

const queryClient = new QueryClient();

const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')).render(
        <GoogleOAuthProvider clientId={clientID}>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </AuthProvider>
        </GoogleOAuthProvider>
)
