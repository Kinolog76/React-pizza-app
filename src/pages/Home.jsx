import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import { Sort, sortList } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
import Pagination from "../components/Pagination";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

function Home({ searchValue }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filterSlice);
  const sortType = sort;
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const fetchPizzas = () => {
    const categoryQuery = categoryId > 0 ? `category=${categoryId}` : "";
    const sortQuery =
      sortType.sortProperty.length > 0
        ? `&sortBy=${sortType.sortProperty}&order=${sortType.order}`
        : "";
    const limitQuery = searchValue || categoryId > 0 ? "" : `&limit=8&page=${currentPage}`;
    const url = `https://66300677c92f351c03d8dd7a.mockapi.io/items?${limitQuery}${categoryQuery}${sortQuery}`;
    setIsLoading(true);

    axios
      .get(url)
      .then((res) => {
        setPizzasData(res.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          ...params,
          sort,
          categoryId: params.category,
          currentPage: params.page,
        }),
      );
    }
    isSearch.current = true;
    fetchPizzas();
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      window.scrollTo(0, 0);
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType, currentPage, searchValue]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category: categoryId,
        sortBy: sortType.sortProperty,
        order: sortType.order,
        page: currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

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
        <Pagination onChangePage={onChangePage} currentPage={currentPage} />
      )}
    </>
  );
}

export default Home;
