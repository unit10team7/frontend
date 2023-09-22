import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";

import App from "./App.tsx";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <GlobalStyle />
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
);
