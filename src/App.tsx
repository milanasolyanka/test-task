import React, { useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";
import { Cards } from "./components/Cards/Cards";
import { getPictures } from "./api";

function App() {
  return (
    <div className="App">
      <Header contentText="TestTask" />
      <Body
        bodyContent={
          <div className="body-content">
            <div className="title">Список карточек</div>
            <Cards />
          </div>
        }
      />
      <Footer contentText="© 2023 Milana" />
    </div>
  );
}

export default App;
