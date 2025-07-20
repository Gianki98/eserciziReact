import React, { useState, useRef, useEffect } from "react";
import useBotResponse from "../hooks/useBotResponse";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Ciao! Come stai?", sent: false },
    { id: 2, text: "Bene grazie! Tu?", sent: true },
    { id: 3, text: "Tutto bene, grazie!", sent: false },
    { id: 4, text: "Che fai di bello?", sent: true },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [lastUserMessage, setLastUserMessage] = useState("");
  const [shouldFetchBot, setShouldFetchBot] = useState(false);
  const chatEndRef = useRef(null);

  // Hook per ottenere la risposta del bot
  const { botResponse, loading, error } = useBotResponse(
    lastUserMessage,
    shouldFetchBot
  );

  // Scroll automatico alla fine della chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Gestisci la risposta del bot quando arriva
  useEffect(() => {
    if (botResponse && shouldFetchBot) {
      const botMessage = {
        id: messages.length + 1,
        text: botResponse.message || botResponse.response || "Risposta del bot",
        sent: false,
      };

      setMessages((prev) => [...prev, botMessage]);
      setShouldFetchBot(false);
    }
  }, [botResponse, shouldFetchBot, messages.length]);

  // Gestisci errori
  useEffect(() => {
    if (error && shouldFetchBot) {
      const errorMessage = {
        id: messages.length + 1,
        text: "Scusa, non riesco a rispondere in questo momento. Riprova più tardi.",
        sent: false,
      };

      setMessages((prev) => [...prev, errorMessage, messages.length]);
      setShouldFetchBot(false);
    }
  }, [error, shouldFetchBot]);

  const handleSendMessage = () => {
    const trimmed = newMessage.trim();
    if (trimmed === "") return;

    // Aggiungi il messaggio dell'utente
    const userMsg = {
      id: messages.length + 1,
      text: trimmed,
      sent: true,
    };

    setMessages((prev) => [...prev, userMsg]);
    setNewMessage("");

    // Prepara per fetchare la risposta del bot
    setLastUserMessage(trimmed);
    setShouldFetchBot(true);

    // Aggiungi un messaggio di "typing" temporaneo
    if (loading) {
      const typingMsg = {
        id: messages.length + 2,
        text: "Il bot sta scrivendo...",
        sent: false,
        typing: true,
      };
      setMessages((prev) => [...prev, typingMsg]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Rimuovi messaggi di typing quando arriva la risposta
  useEffect(() => {
    if (!loading && messages.some((m) => m.typing)) {
      setMessages((prev) => prev.filter((m) => !m.typing));
    }
  }, [loading, messages]);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Chat with Bot (SWR)</h1>
      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          overflowY: "auto",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fafafa",
        }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              alignSelf: message.sent ? "flex-end" : "flex-start",
              maxWidth: "70%",
              margin: "5px",
              padding: "10px 15px",
              color: message.sent ? "white" : message.typing ? "#666" : "black",
              backgroundColor: message.sent
                ? "#007bff"
                : message.typing
                ? "#e0e0e0"
                : "#f5f5f5",
              borderRadius: "15px",
              fontSize: "14px",
              fontStyle: message.typing ? "italic" : "normal",
            }}
          >
            {message.text}
          </div>
        ))}
        {loading && (
          <div
            style={{
              alignSelf: "flex-start",
              padding: "10px",
              color: "#666",
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            Il bot sta scrivendo...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Scrivi un messaggio..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
          disabled={loading}
        />
        <button
          onClick={handleSendMessage}
          disabled={loading || newMessage.trim() === ""}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor:
              loading || newMessage.trim() === "" ? "#ccc" : "#007bff",
            color: "white",
            cursor:
              loading || newMessage.trim() === "" ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
