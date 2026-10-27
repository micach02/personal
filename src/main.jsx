// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// Vendor CSS first so the app's own stylesheets (imported by App) win ties against Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import AOS from 'aos';

AOS.init({ duration: 1000 });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
