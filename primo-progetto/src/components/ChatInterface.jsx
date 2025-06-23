import React from 'react';

const ChatInterface = () => {
  // Array di messaggi con proprietà sent per distinguere inviati/ricevuti
  const messages = [
    { id: 1, text: "Ciao! Come stai?", sent: false },
    { id: 2, text: "Bene grazie! Tu?", sent: true },
    { id: 3, text: "Tutto bene, grazie!", sent: false },
    { id: 4, text: "Che fai di bello?", sent: true }
  ];

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map(message => (
          <div
            key={message.id}
            style={{
              textAlign: message.sent ? 'right' : 'left',
              margin: '10px',
              padding: '10px',
              backgroundColor: message.sent ? '#e3f2fd' : '#f5f5f5',
              borderRadius: '10px'
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatInterface;