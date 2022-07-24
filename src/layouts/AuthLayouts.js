import React from 'react';
import { Container } from 'react-bootstrap';

const AuthLayout = ({ children }) => (
  <div className="privateAreaContent">
    <Container>
      {children}
    </Container>
  </div>
);

export default AuthLayout;
