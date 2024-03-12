import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import RoomContextProvider from "./context/RoomContextProvider.tsx";
import ConverstionStateProvider from "./context/ConverstionStateProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoomContextProvider>
          <ConverstionStateProvider>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </ConverstionStateProvider>
        </RoomContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
