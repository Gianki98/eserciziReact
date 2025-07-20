import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import "./index.css";
import App from "./App.jsx";
import fetcher from "./utils/fetcher";

// Configurazione globale di SWR
const swrConfig = {
  // Fetcher di default per tutte le chiamate useSWR
  fetcher,

  // Opzioni di revalidazione
  revalidateOnFocus: false, // Non ricaricare quando la finestra torna in focus
  revalidateOnReconnect: true, // Ricarica quando torna la connessione internet

  // Gestione errori
  shouldRetryOnError: true, // Riprova in caso di errore
  errorRetryCount: 3, // Numero massimo di retry
  errorRetryInterval: 5000, // Intervallo tra i retry (5 secondi)

  // Cache
  focusThrottleInterval: 5000, // Throttle revalidazione on focus
  dedupingInterval: 2000, // Deduplica richieste entro 2 secondi
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </StrictMode>
);
