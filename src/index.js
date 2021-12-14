import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
