import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <header>
      <nav className='flex justify-between border-cyan-100'>
        <div>
          <Link href='/'>Taurus AI</Link>
        </div>
        <div>
          <Link href='/account'>Account</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar