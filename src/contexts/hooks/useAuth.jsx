import { useState, useEffect } from 'react';

import jwtDecode from "jwt-decode";

import api from '../../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [logguedUser, setLogguedUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      setUserHasLoggued(token)
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(login) {
    const { data: { type, token } } = await api.post('login', login);
    
    setUserHasLoggued(token)
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `${type} ${token}`;
    setAuthenticated(true);
    history.push('/courses');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  function setUserHasLoggued(token) {
    const jwtDecoded = jwtDecode(token);

    setLogguedUser({
      id: parseInt(jwtDecoded.jti),
      username: jwtDecoded.sub
    })
  }

  return { authenticated, loading, handleLogin, handleLogout, logguedUser };
}