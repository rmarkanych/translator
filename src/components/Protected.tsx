import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

type TProps = {
  children: JSX.Element;
};

export const Protected: FC<TProps> = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};