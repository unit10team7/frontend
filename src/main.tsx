import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";

import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Layout from "./components/Layout.tsx";
import GlobalStyle from "./styles/GlobalStyle.tsx";

const queryClient = new QueryClient();

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <GlobalStyle />
        <ErrorBoundary>
          <Layout id="layout">
            <App />
          </Layout>
        </ErrorBoundary>
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
);
