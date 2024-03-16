import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate } from 'react-router-dom';

function IsPrivate(props) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // if the authentication is still loading:
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // if the user is not logged in:
  if (!isLoggedIn) {
    return <Navigate to={'/login'} />;
  } else {
    // if user is logged in, allow it to see the page:
    return props.children;
  }
}

export default IsPrivate;
