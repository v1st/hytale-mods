import React from 'react'
import { Route } from 'react-router-dom';

import ModalRoutes from './ModalRoutes';


function Routes() {
  return (
    <Route component={ModalRoutes} />
  );
}
export default Routes;