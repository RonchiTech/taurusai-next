import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header>
      <nav className='flex justify-between items-center border-cyan-100'>
        <div>
          <span className='gemini-text text-4xl'>Taurus AI</span>
        </div>
        <div className=''>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
