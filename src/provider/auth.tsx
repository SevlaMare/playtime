import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as AuthSession from 'expo-auth-session';

// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();
// navigation.navigate('Home');

import { USER } from '../helpers/mock_data';
import {
  BASE_URL,
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE,
} from '../config/discord';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

type AuthContextData = {
  user: User;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(USER);
  const [load, setLoad] = useState(false);

  const signIn = async () => {
    try {
      setLoad(true);
      const authUrl = `${BASE_URL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({
        authUrl,
      } as AuthResponse);

      console.log('>>> try sign', response);
    } catch {
      throw new Error('Auth fail');
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
