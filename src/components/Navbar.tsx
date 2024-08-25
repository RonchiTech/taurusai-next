import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header>
      <nav className='flex justify-between border-cyan-100'>
        <div>
          <Link href='/'>Taurus AI</Link>
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
