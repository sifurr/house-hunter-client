import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const response = await axios.get('/api/v1/authenticated-user');
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthenticatedUser();
  }, []);

  return { user, loading };
};

export default useAuth;
