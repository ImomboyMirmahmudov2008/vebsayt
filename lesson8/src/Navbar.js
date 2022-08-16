import React from 'react';

export default function Navbar() {
  return (
    <div>
        <nav className='d-flex w-100 justify-content-between align-items-center px-4 py-4 bg-info'>
        <h1>Logo</h1>

                <ul className='d-flex me-5'>
                    <li><a href='#' className='me-5 '>Blog</a></li>
                    <li>
                        <Link to='/About' />
                    </li>
                </ul>
        </nav>
    </div>
  )
}
