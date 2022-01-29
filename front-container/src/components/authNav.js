import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import AuthenticationButton from './authenticationButton';

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;