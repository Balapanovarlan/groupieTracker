import React from 'react'
import styles from './Auth.module.css'
import { GoogleLogin } from '@react-oauth/google'
import { useAuth } from '../../contexts/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const Auth = () => {

  const {login} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/favorites';

  const handleSuccess = (credentialResponse)=>{
    login(credentialResponse.credential);
    navigate(from,{replace:true});      
  };

  return (
    <div className={styles.wrapper}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={()=>{console.log(`Error!`);}}
          width={200}
        />
    </div>
  )
}

export default Auth