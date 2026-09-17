import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 border-b border-base-300 px-4 sm:px-8 sticky top-0 z-40 backdrop-blur bg-opacity-90">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold text-primary">
          MovieExplorer
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active font-semibold" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/movies" 
              className={({ isActive }) => (isActive ? "btn btn-primary btn-sm text-white" : "btn btn-outline btn-primary btn-sm")}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
