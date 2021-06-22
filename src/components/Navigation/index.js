import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
const Navigation = ( {authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <ul>
    
      <Link to={ROUTES.LANDING}>Landing</Link>&nbsp;&nbsp;
    
    
      <Link to={ROUTES.HOME}>Home</Link>&nbsp;&nbsp;
    
    
      <Link to={ROUTES.ACCOUNT}>Account</Link>&nbsp;&nbsp;
      <Link to={ROUTES.ADMIN}>Admin</Link>&nbsp;&nbsp;

    
      <SignOutButton />
    
  </ul>
);
 
const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  
  </ul>
);
 
export default Navigation;