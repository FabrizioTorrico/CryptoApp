import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import CryptoList from "./Crypto/CryptoList";
import CryptoInfo from "./Crypto/CryptoInfo";
import { Container } from "@chakra-ui/react";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container maxW="5xl">
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/cryptos/:id" element={<CryptoInfo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
