import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <nav className='navbar'>
            <h2 className='title'>Logo</h2>

            <ul className='list'>
                <li className='item'>Home</li>
                <li className='item'>Product</li>
                <li className='item'>Services</li>
                <li className='item'>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;