import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root-chat"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function initializeChatWidget(appId) {
  // Render the chat widget component inside the container
  root.render(<App appId={appId} />);
}

// Read the query parameter from the script tag URL
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var appId = urlParams.get("appId");

// Auto-initialize the chat widget when the script is added
document.addEventListener("DOMContentLoaded", function () {
  initializeChatWidget(appId);
});

// Expose the initialization function globally
window.initializeChatWidget = initializeChatWidget;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
