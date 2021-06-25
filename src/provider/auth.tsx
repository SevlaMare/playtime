import React, { createContext, useContext, useState, ReactNode } from 'react';

const MOCK_USER = {
  id: '1',
  username: 'Sevla',
  firstName: 'Thiago',
  avatar: 'avatar.png',
  email: 'email@email.com',
  token: '12348JDIOJ#MIO',
};

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

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(MOCK_USER);

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
