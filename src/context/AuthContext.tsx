import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignCredentials {
    email: string;
    password: string;
}

interface AuthContextProps {
    name: string,
    signIn(credential: SignCredentials): Promise<void>
}
export const AuthContext = createContext<AuthContextProps>({ } as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post('sessions', {
      email,
      password,
    });

    console.log(data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'joca', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
