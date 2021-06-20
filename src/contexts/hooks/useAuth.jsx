import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(login) {
    const { data: { token, type } } = await api.post('login', login);

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

  return { authenticated, loading, handleLogin, handleLogout };
}