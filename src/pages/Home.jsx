import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";

function Home() {
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ name: "популярности ↓", sortProperty: "rating", order: "desc" });

  console.log(categoryId, sortType);

  useEffect(() => {
    const categoryQuery = categoryId > 0 ? `category=${categoryId}` : "";
    const sortQuery = sortType.sortProperty.length > 0 ? `&sortBy=${sortType.sortProperty}&order=${sortType.order}` : "";
    const url = `https://66300677c92f351c03d8dd7a.mockapi.io/items?${categoryQuery}${sortQuery}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPizzasData(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
        console.log(url);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((item, index) => <Skeleton key={index} />)
          : pizzasData.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
}

export default Home;
