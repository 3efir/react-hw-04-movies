import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import './styles.scss';

const Navigation = () => (
  <div className="navigation">
    {routes.map(
      ({ path, isExact, label, isInMenu }) =>
        isInMenu && (
          <NavLink
            className="link"
            activeClassName="link--active"
            to={path}
            exact={isExact}
            key={path}
          >
            {label}
          </NavLink>
        ),
    )}
  </div>
);

export default Navigation;
