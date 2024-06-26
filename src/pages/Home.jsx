import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
import Pagination from "../components/Pagination";

function Home({ searchValue }) {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filterSlice);
  const sortType = sort;

  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const categoryQuery = categoryId > 0 ? `category=${categoryId}` : "";
    const sortQuery =
      sortType.sortProperty.length > 0
        ? `&sortBy=${sortType.sortProperty}&order=${sortType.order}`
        : "";
    const limitQuery = searchValue || categoryId > 0 ? "" : `&limit=8&page=${currentPage}`;
    const url = `https://66300677c92f351c03d8dd7a.mockapi.io/items?${limitQuery}${categoryQuery}${sortQuery}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPizzasData(json);
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, [categoryId, sortType, currentPage, searchValue]);

  const skeletons = [...new Array(8)].map((item, index) => <Skeleton key={index} />);
  const pizzas = pizzasData
    .filter((obj) => {
      return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    .map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">{pizzas.length > 0 ? "Все пиццы" : "Пиццы не найдены"}</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas.length > 0 && pizzas}</div>
      {searchValue === "" && categoryId === 0 && (
        <Pagination onChangePage={(number) => setcurrentPage(number)} />
      )}
    </>
  );
}

export default Home;
