import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from './context/AuthContext';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ChakraProvider>
);
