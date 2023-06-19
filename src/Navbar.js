import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to= "/content"><li>Content</li></Link>
            <Link to= "/foot"><li>Footer</li></Link>
            <Link to="/login"><li>Login</li></Link>
        </ul>
    </div>
  )
}

export default NavBar