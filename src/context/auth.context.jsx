import { createContext, useEffect, useState } from 'react';
import { verify } from '../api/auth.api';

const AuthContext = createContext();

const AuthProviderWrapper = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(true);

  const storeToken = token => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = async () => {
    // Get token from localStorage:
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      try {
        const response = await verify(storedToken);
        const user = response.data;
        // Update the state variables:
        setUser(user);
        setIsLoggedIn(true);
      } catch (error) {
        // If the server cannot authenticate the jwt (token):
        console.log('Error authenticating the user', error);
        setUser(null);
        setIsLoggedIn(false);
      }
    } else {
      // if token not available:
      setUser(null);
      setIsLoggedIn(false);
    }

    setIsLoading(false);
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const logoutUser = () => {
    // clear the localStorage:
    removeToken();
    // update the state variables:
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        user,
        storeToken,
        authenticateUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
