import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";

import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { worker } from "./mock/browser.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import Layout from "./components/Layout.tsx";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const queryClient = new QueryClient();

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <GlobalStyle />
        <ErrorBoundary>
          <Layout>
            <App />
          </Layout>
        </ErrorBoundary>
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
);
