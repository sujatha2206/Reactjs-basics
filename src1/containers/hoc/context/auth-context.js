import React from 'react';
import Auxiliary from '../Auxiliary';

const AuthContext = React.createContext({
    isAuthenticated:false,
    login:() =>{}
});
export default AuthContext;