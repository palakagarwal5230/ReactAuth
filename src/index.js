import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
      <App />
     </AuthProvider>
 </React.StrictMode>
);
