import React from "react";
import "./App.css";

function ChatWidget() {
  const handleClick = () => {
    // Handle chat widget toggle or open action
    console.log("Chat widget is toggled or opened");
  };

  return (
    <div className="chat-widget">
      <button className="chat-widget-button" onClick={handleClick}>
        Chat
      </button>
    </div>
  );
}

export default ChatWidget;
