import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AlchemyAccountProvider } from '@account-kit/react';
import { createConfig } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";
import { sepolia } from "@account-kit/infra";

const uiConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [[{"type":"email"}]],
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    // alchemy config
    apiKey: "Xpmv9Ti0-dw5ouaB9tljReRlsxhHsL9c", // TODO: add your Alchemy API key - setup your app and embedded account config in the alchemy dashboard (https://dashboard.alchemy.com/accounts)
    chain: sepolia, // TODO: specify your preferred chain here and update imports from @account-kit/infra
    ssr: true, // Defers hydration of the account state to the client after the initial mount solving any inconsistencies between server and client state (read more here: https://accountkit.alchemy.com/react/ssr)
    transport: {
      config: {
        apiKey: "Xpmv9Ti0-dw5ouaB9tljReRlsxhHsL9c"
      },
    },
  },
  uiConfig
);
 
export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AlchemyAccountProvider
        config={config}
        queryClient={queryClient}
      >
        <App />
    </AlchemyAccountProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
