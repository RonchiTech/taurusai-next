'use client';

import Content from '@/components/Content';
import Sidebar from '@/components/Sidebar';
import { useAuth } from '@clerk/nextjs';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

function Dashboard() {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      redirect('/');
    }
  }, [isLoaded, isSignedIn]);

  return <div className='flex h-screen'>
    <Sidebar />
    <Content />
  </div>;
}

export default Dashboard;
