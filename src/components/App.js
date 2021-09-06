import React from "react";
import "../App.css";
import Header from "./Header/Header";
import Footer from "./Footer";
import MainContent from "./MainContent/MainContent";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
}

export default App;
