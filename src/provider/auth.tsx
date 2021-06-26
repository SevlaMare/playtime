import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import * as AuthSession from 'expo-auth-session';
import Http from '../services/http';
// import Storage from '../services/store';

import {
  BASE_URL,
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE,
} from '../config/discord';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    access_token?: string;
    error?: string;
  };
};

type AuthContextData = {
  user: User;
  load: boolean;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [load, setLoad] = useState(false);

  const signIn = async () => {
    try {
      setLoad(true);

      const authUrl = `${BASE_URL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      // login request
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === 'success' && !params.error) {
        // set token on headers
        Http.defaults.headers.authorization = `Bearer ${params.access_token}`;

        // fetch user information
        const userInfo = await Http.get('/users/@me');

        // PARSE user data
        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        // send user data to provider
        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token,
        };

        // persist user data on cache
        await AsyncStorage.setItem('CURRENT_USER', JSON.stringify(userData));

        // send user data to provider
        setUser(userData);
      }
    } catch {
      throw new Error('Auth fail');
    } finally {
      setLoad(false);
    }
  };

  // load user data from cache
  const userFromCache = async () => {
    const stored_data = await AsyncStorage.getItem('CURRENT_USER');

    if (stored_data) {
      const current_user = JSON.parse(stored_data) as User;

      Http.defaults.headers.authorization = `Bearer ${current_user.token}`;

      setUser(current_user);
    }
  };

  useEffect(() => {
    userFromCache();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, load }}>
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
