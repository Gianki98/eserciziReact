import React, { useState, useRef, useEffect } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Ciao! Come stai?", sent: false },
    { id: 2, text: "Bene grazie! Tu?", sent: true },
    { id: 3, text: "Tutto bene, grazie!", sent: false },
    { id: 4, text: "Che fai di bello?", sent: true }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  // Scroll automatico alla fine della chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    const trimmed = newMessage.trim();
    if (trimmed === '') return;

    const newMsg = {
      id: messages.length + 1,
      text: trimmed,
      sent: true
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Chat</h1>
      <div
        style={{
          border: '1px solid #ccc',
          height: '300px',
          overflowY: 'auto',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {messages.map(message => (
          <div
            key={message.id}
            style={{
              textAlign: message.sent ? 'right' : 'left',
              margin: '5px',
              padding: '10px',
              backgroundColor: message.sent ? '#e3f2fd' : '#f5f5f5',
              borderRadius: '10px'
            }}
          >
            {message.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Scrivi un messaggio..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;
