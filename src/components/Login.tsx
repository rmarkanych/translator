import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { UserAuth } from '../context/AuthContext';

export const Login: FC = () => {
  const { googleSignIn, user } = UserAuth();
  
   const navigate = useNavigate();

   const handleGoogleSignIn = async () => {
     try {
       await googleSignIn();
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     if (user != null) {
       navigate('/translation');
     }
   }, [user]);

  return (
    <GoogleLoginButton
      onClick={handleGoogleSignIn}
      style={{
        background: '#81E6D9',
        width: '250px',
        borderRadius: '0.375rem',
        transition: 'background .2s ease',
      }}
      align='center'
      activeStyle={{ background: '#4FD1C5' }}
    />
  );
};