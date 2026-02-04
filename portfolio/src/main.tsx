/**
 * @copyright 2025 Carlos Gómez Prosper
 * @license Apache-2.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Sidebar from './components/Sidebar.tsx';
import FloatingMenu from './components/FloatingMenu.tsx';
import Profile from './components/Profile.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="lg:flex lg:justify-center lg:items-start lg:gap-10">
      <Sidebar />
      <FloatingMenu />
      <Profile />
      <App />
    </div>
  </StrictMode>
);
