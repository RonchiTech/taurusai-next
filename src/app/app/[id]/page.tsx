import React from 'react';

interface ChatPageProps {
  params: {
    id: string;
  };
}

function ChatPage({ params }: ChatPageProps) {
  console.log(params);

  return <div>page</div>;
}

export default ChatPage;
