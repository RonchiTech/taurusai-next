'use client';

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

  return <div>Dashboard</div>;
}

export default Dashboard;
