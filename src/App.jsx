import { useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";
import pizzasData from "./assets/pizza.json";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzasData.map((item) => (
                <PizzaBlock {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
