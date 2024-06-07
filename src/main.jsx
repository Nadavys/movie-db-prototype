import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SearchProvider from './SearchProvider';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>
);

createRoot(root).render(app);