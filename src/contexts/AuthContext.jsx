import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null);
    const [isInitializing, setIsInitializing] = useState(true);
    
    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if (storedUser&&storedToken) {
            const decoded = JSON.parse(storedUser);
            setUser({ 
                id: decoded.sub, 
                name: decoded.name, 
                email: decoded.email, 
                picture: decoded.picture,
                token: storedToken
              });
        }
        setIsInitializing(false);
    },[])

    const login = (credential) => {
        const decoded  = jwtDecode(credential);
        const userData = {
            id: decoded.sub,
            name: decoded.name,
            email: decoded.email,
            picture: decoded.picture
        };
        setUser({...userData ,token: credential});
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', credential);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return(
        <AuthContext.Provider
            value={{user, login, logout, isInitializing}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);