
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Root mounting logic
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Ensure index.html has a <div id='root'></div>");
}
