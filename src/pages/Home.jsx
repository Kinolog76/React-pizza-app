import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";

function Home() {
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://66300677c92f351c03d8dd7a.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setPizzasData(json);
        setIsLoading(false);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((item, index) => <Skeleton key={index} />)
          : pizzasData.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
}

export default Home;