import { useState } from "react";
import { useSelector } from "react-redux";

function Categories({value, onChangeCategory}) {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const { categoryId } = useSelector((state) => state.filterSlice);

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index}
            onClick={() => onChangeCategory(index)}
            className={categoryId == index ? "active" : ""}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
