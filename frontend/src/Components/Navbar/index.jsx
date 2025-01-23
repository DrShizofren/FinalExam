import React from 'react'
import "../../Assets/global.css";
import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <>
    <nav>
        <div className="navbar">
            <h3>Floral studio</h3>
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/add">AddPage</Link></li>
                <li><Link className='link' to="/ftable">FlowerTable</Link></li>
            </ul>
        </div>
    </nav>
  </>
}

export default Navbar