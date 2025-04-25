import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../../components/Loading/Loading'

const PrivateRoute = ({ children }) => {
  const { user , isInitializing} = useAuth();
  const location = useLocation();

  if (isInitializing) {
    return <Loading/>
  }

  if (!user) {
    return <Navigate to="/login" state={{from:location}} replace />;
  }

  return children;
}; 

export default PrivateRoute;