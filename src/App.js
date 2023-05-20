import React, { useState } from "react";
import "./App.css";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-app">
      <button>
        <IconButton aria-label="delete" color="primary" onClick={toggleChat}>
          {isOpen ? (
            <CloseIcon fontSize="large" sx={{ color: "white" }} />
          ) : (
            <LiveHelpIcon fontSize="large" sx={{ color: "white" }} />
          )}
        </IconButton>
      </button>

      {isOpen && <div id="iframe-area"></div>}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* Your website content */}
      <ChatApp />
    </div>
  );
}

export default App;
