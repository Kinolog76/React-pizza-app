import { useState } from "react";

function Categories() {
  const [activeIndex, setActiveEndex] = useState(0);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  function onClickCategory(index) {
    setActiveEndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li key={index}
            onClick={() => setActiveEndex(index)}
            className={activeIndex === index ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
