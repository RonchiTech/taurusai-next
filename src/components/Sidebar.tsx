'use client';

import Link from 'next/link';
import React from 'react';

const DUMMY_CHATS = [
  { id: 123123, question: 'How to be you po?' },
  { id: 171123, question: 'How to be me po?' },
  { id: 12123, question: 'How to be us po?' },
  { id: 1272123, question: 'How to be to to be po?' },
  { id: 16123, question: 'How how po?' },
  { id: 122323, question: 'Can you check' },
  { id: 163123, question: 'How hmm?' },
];

function Sidebar() {
  const chats = DUMMY_CHATS.map((chat) => (
    <Link href={`app/${chat.id}`} key={chat.id}>
      <li className='mb-4'>{chat.question}</li>
    </Link>
  ));

  return (
    <div className='w-4/12 p-6 bg-gray-900'>
      <div className='mb-5'>
        <h2 className='text-xl font-semibold'>Recent</h2>
      </div>
      <div>
        <ul>{chats}</ul>
      </div>
    </div>
  );
}

export default Sidebar;
