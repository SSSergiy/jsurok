import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import "@picocss/pico";
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
