import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-title'>
        <div className='header-title__main-title'>Travelize</div>
        <div className='header-title__sub-title'>My traveling experiences</div>
      </div>
      <div className='navbar'>
        <a href='#' className='navbar__link'>
          Home
        </a>
        <a href='#' className='navbar__link'>
          Blog
        </a>
        <a href='#' className='navbar__link navbar__link--selected'>
          About
        </a>
      </div>
    </header>
  );
}
