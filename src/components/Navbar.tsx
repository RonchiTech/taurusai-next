import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header className='text-4xl'>
      <nav className='flex justify-between border-cyan-100'>
        <div>
          <span className='gemini-text'>Taurus AI</span>
        </div>
        <div>
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
