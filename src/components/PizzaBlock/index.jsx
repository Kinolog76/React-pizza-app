import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";

function PizzaBlock(props) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cartSlice);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ["Тонкое", "Традиционное"];
  
  const onClickAdd = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      type: typeNames[activeType],
      size: props.sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  const onClickRemove = () => {
    dispatch(removeItem(props.id));
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${props.id}`} state={props.id} className="">
        <img className="pizza-block__image" src={props.imageUrl} alt={props.title} />
        <h4 className="pizza-block__title">{props.title}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {props.types.map((typeId, index) => (
            <li
              onClick={() => setActiveType(index)}
              className={activeType === index ? "active" : ""}
              key={typeId}>
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {props.sizes.map((size, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? "active" : ""}
              key={size}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price-box">
          <div className="pizza-block__price">от {props.price} ₽</div>
          <i>
            {items
              .filter((item) => item.id === props.id)
              .reduce((sum, item) => sum + item.count, 0)}
          </i>
        </div>
        <div className="pizza-block__buttons">
          <button className="button button--outline button--add" onClick={onClickRemove}>
            <span>Убрать</span>
          </button>
          <button className="button button--outline button--add" onClick={onClickAdd}>
            <span>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
