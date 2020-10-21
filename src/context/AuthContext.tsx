import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
    token: string
    user: object
}
interface SignCredentials {
    email: string;
    password: string;
}

interface AuthContextProps {
    user: object,
    signIn(credential: SignCredentials): Promise<void>
}
export const AuthContext = createContext<AuthContextProps>({ } as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const { data: axiosData } = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = axiosData;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
