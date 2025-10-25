import React from 'react';

const Message = ({ message }) => (
  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
    <div
      className={`max-w-xs sm:max-w-md lg:max-w-lg px-5 py-3 rounded-2xl shadow-md ${
        message.sender === 'user'
          ? 'bg-green-700 text-white rounded-br-none border border-green-800'
          : 'bg-green-50 text-brown-800 rounded-tl-none border border-green-200'
      } transition-all`}
    >
      <p className="text-base whitespace-pre-wrap">{message.text}</p>
      <p className="text-xs text-opacity-70 mt-1 ${message.sender === 'user' ? 'text-white' : 'text-brown-500'}">
        {message.timestamp}
      </p>
    </div>
  </div>
);

export default Message;