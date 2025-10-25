import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Loader2, CheckCircle } from 'lucide-react';
import { DUMMY_QUICK_ACTIONS } from '../utils/constants'; // Dependency
import { callGeminiApi } from '../utils/api'; // Dependency
import Message from './Message'; // Dependency (A separate component to display a single message)

const UnifiedAgriculturalAdvisor = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Initialize chat with a welcome message
  useEffect(() => {
    setMessages([
      {
        sender: 'ai',
        text: `Hello Rahul Patil! I'm your MahaAgri Advisor, here to assist with crop planning, pest control, financial aid, and more. How can I help you today?`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, []);

  // Auto-scroll to the bottom on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  // Function to send the message and call the Gemini API
  const handleSend = async (messageToSend = input) => {
    if (!messageToSend.trim()) return;

    // 1. Add user message to state
    const newUserMessage = {
      sender: 'user',
      text: messageToSend,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Call the Gemini API function
      const aiResponseText = await callGeminiApi(messageToSend, messages);

      // 3. Add AI response to state
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: aiResponseText,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: 'Error: Could not connect to the advisor. Please try again.',
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (text) => {
    handleSend(text);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col h-[650px] border border-green-200">
      {/* Header */}
      <div className="p-4 border-b border-green-100 flex items-center space-x-3 bg-gradient-to-r from-green-50 to-beige-50 rounded-t-2xl">
        <div className="h-3 w-3 rounded-full bg-green-700 animate-pulse"></div>
        <h3 className="text-xl font-serif font-semibold text-green-800">MahaAgri Advisor</h3>
      </div>

      {/* Chat Area */}
      <div ref={chatContainerRef} className="p-5 flex-grow overflow-y-auto space-y-4">
        <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-400 mb-4">
          <p className="font-medium text-green-800 flex items-center text-sm">
            <Leaf className="h-5 w-5 mr-2 text-green-700" /> Your AI assistant for crop planning, pest control, financial aid, and flood recovery.
          </p>
        </div>

        <p className="font-semibold text-green-800 text-sm mb-2">Quick Actions:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {DUMMY_QUICK_ACTIONS.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.text)}
              className="text-sm text-left p-3 rounded-lg border border-green-200 hover:bg-green-100 transition flex items-center space-x-2 text-brown-700"
            >
              <CheckCircle className="h-5 w-5 text-green-700 flex-shrink-0" />
              <span>{action.text}</span>
            </button>
          ))}
        </div>

        <div className="pt-3 border-t border-green-100">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="px-5 py-3 rounded-2xl bg-green-50 text-brown-800 rounded-tl-none flex items-center border border-green-200">
                <Loader2 className="h-5 w-5 mr-2 animate-spin text-green-700" />
                <span className="text-sm">Advisor is typing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-green-200">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Ask about crops, loans, or weather..."
            className="flex-grow p-3 border border-green-300 rounded-full focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition bg-green-50"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading}
            className="p-3 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition disabled:bg-brown-300 disabled:cursor-not-allowed flex items-center justify-center"
            title="Send Message"
          >
            <Leaf className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnifiedAgriculturalAdvisor;