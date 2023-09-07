import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";
import { Cards } from "./components/Cards/Cards";

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
