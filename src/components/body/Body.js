import React from 'react';
import { Fragment } from 'react';
import Navbar from '../nav/Navbar.js';
import { Main } from './Body.elements';

const Body = ({ children }) => (
  <Fragment>
    <Navbar />
    <Main>{children}</Main>
  </Fragment>
);

export default Body;