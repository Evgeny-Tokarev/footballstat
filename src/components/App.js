import React from "react";
import "../App.css";
import request from "./request";
import Header from "./Header/Header";
import Footer from "./Footer";
import MainContent from "./MainContent/MainContent";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
