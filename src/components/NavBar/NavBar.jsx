import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <div className="navbar bg-base-300 flex justify-center">
          <div>
            <Link to="/" className="font-bold text-2xl">
              Weather App
            </Link>
          </div>
        </div>
      </div>
    );
};

export default NavBar;