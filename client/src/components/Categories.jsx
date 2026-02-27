import { useEffect, useState } from "react";
import { getCategories } from "../api";

export default function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div>
      <h2>Plant Categories</h2>
      {categories.map((cat) => (
        <button
          key={cat.categoryID}
          onClick={() => onSelectCategory(cat.categoryID)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}