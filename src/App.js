import React from 'react';
import './App.css'

const EmbeddedChatPage = () => {
  return (
    <div className='example-website'>
    <div className="embedded-chat-container">
      <iframe
src='/D:/job/Chatpage/src/App.js'
        title="Chat Page"
        className="embedded-chat-iframe"
      />

    <div className='example-website-container'>

    </div>
  </div>

    </div>
  );
};

export default EmbeddedChatPage;