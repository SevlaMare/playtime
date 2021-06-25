import React, { createContext, useContext, useState, ReactNode } from 'react';
import { USER } from '../helpers/mock_data';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

// appid 857804257528381471
// public key d3abd634c2437a35ecf7aa15c36ee2a83434be0cc57bc60317d482b46646846b

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(USER);
  const [load, setLoad] = useState(false);

  const SignIn = () => {
    try {
      setLoad(true);

      // AuthSession.startAsync({authUrl})
    } catch (error) {}
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// CUSTOM HOOK
const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
