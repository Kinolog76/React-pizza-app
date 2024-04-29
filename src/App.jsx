import { useState, useEffect } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";

function App() {
  const [pizzasData, setPizzasData] = useState([]);

  useEffect(() => {
    fetch("https://66300677c92f351c03d8dd7a.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setPizzasData(json))
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

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
                <PizzaBlock key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
