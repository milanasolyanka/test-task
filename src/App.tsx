import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Cards } from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header contentText="TestTask" />
      <Body
        bodyContent={
          <div>
            <div className="title">Список карточек</div>
            <div className="cards">
              <Cards />
            </div>
          </div>
        }
      />
      <Footer contentText="© 2023 Milana" />
    </div>
  );
}

export default App;
