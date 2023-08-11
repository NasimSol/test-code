import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyle, theme } from "./Style";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./CustomHooks/useAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <App />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
