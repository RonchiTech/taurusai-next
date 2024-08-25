import React from 'react';
import { SignInButton } from '@clerk/nextjs';
import Image from 'next/image';

function Container() {
  return (
    <div className='my-48 mx-32 flex gap-14 align-middle h-3/4 '>
      <div className='flex-1 flex flex-col items-baseline justify-center gap-4 w-4/5'>
        <h1 className='gemini-text lg:text-8xl font-semibold'>Taurus AI</h1>
        <h2 className='lg:text-xl'>
          Supercharge your creativity and productivity
        </h2>
        <h3 className='lg:w-3/5'>
          Chat to start writing, planning, learning and more with Taurus AI.
          Powered by Gemini
        </h3>
        <SignInButton>
          <button className='mt-4 bg-blue-500 py-2 px-6 rounded-3xl'>
            Sign In
          </button>
        </SignInButton>
      </div>
      <div className='flex-1 w-4/5 flex justify-center'>
        <Image
          className='rounded-3xl'
          src='/login-image.jpg'
          alt='Man reading a book'
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}

export default Container;
