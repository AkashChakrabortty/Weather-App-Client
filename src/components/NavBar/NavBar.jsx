import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <div className="navbar bg-base-300">
          <div className="flex-1">
            <Link to="/">Weather App</Link>
          </div>
          <div className="flex-none">
            <button>
              <input type="checkbox" className="toggle" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default NavBar;