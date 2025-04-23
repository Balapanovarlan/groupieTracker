import React from 'react'
import styles from './Auth.module.css'
import { GoogleLogin } from '@react-oauth/google'
import { useAuth } from '../../contexts/AuthContext'



const Auth = () => {

  const {login} = useAuth();

  return (
    <div className={styles.wrapper}>
        <GoogleLogin
          onSuccess={credentialResponse => {   
            login(credentialResponse.credential)            
          }}
          onError={()=>{console.log(`Error!`);}}
          width={200
          }
        />
    </div>
  )
}

export default Auth