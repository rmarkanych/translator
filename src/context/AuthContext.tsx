import { FC, createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../services/firebase';

type TAuthContextValue = {
  googleSignIn: () => void;
  logOut: () => void;
  user: User | null;
};

type TProps = {
  children: ReactNode;
};

const AuthContext = createContext<TAuthContextValue | undefined>(undefined);

export const AuthContextProvider: FC<TProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (user === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={{googleSignIn, logOut, user}}>{ children }</AuthContext.Provider>
  )
};
export const UserAuth = () => {
  const contextValue = useContext(AuthContext);
  if (contextValue === undefined) {
    throw new Error('useUserAuth must be used within a AuthContextProvider');
  }
  return contextValue;
};