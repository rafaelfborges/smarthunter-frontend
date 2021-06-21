import React, {createContext} from 'react';

import useAuth from './hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout, logguedUser
  } = useAuth();

  return (
    <AuthContext.Provider value={{ loading, authenticated, handleLogin, handleLogout, logguedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };