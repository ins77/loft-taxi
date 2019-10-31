import React, { useContext } from 'react';

import AuthPage from '../../containers/AuthPage';
import Layout from '../../containers/Layout';
import { AuthContext } from '../AuthContext';

const Main: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated
    ? <Layout />
    : <AuthPage />;
}
 
export default Main;