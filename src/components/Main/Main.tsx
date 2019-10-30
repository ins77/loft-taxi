import React, { useContext } from 'react';

import AuthPage from '../AuthPage';
import Layout from '../Layout';
import { AuthContext } from '../AuthContext';

const Main: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated
    ? <Layout />
    : <AuthPage />;
}
 
export default Main;