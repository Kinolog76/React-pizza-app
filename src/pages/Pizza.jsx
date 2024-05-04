import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../components/PizzaPage/Skeleton";

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://66300677c92f351c03d8dd7a.mockapi.io/items?id=${id}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.map((item) => {
          if (item.id == id) {
            setPizza(item);
          }
        });
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="pizza-page">
          <Skeleton />
        </div>
      ) : (
        <div className="pizza-page">
          <h1>{pizza.title}</h1>
          <img src={pizza.imageUrl} alt="" />
          <h2>От {pizza.price} ₽</h2>
          <p>{pizza.description}</p>
        </div>
      )}
    </>
  );
};

export default Pizza;
