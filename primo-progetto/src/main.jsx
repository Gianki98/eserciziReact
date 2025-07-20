import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import './index.css';
import App from './App.jsx';
import fetcher from './utils/fetcher';

const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  shouldRetryOnError: true,
  errorRetryCount: 2,
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </StrictMode>,
);