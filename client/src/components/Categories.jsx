import { useEffect, useState } from "react";
import { getCategories } from "../api";
import "../styles/Dashboard.css";

import indoorImg from "../images/indoor-plant.jpg";
import outdoorImg from "../images/outdoor-plant.jpg";
import petImg from "../images/pet-plant.jpg";

export default function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const getCategoryImage = (name) => {
    if (name.toLowerCase().includes("indoor")) return indoorImg;
    if (name.toLowerCase().includes("outdoor")) return outdoorImg;
    if (name.toLowerCase().includes("pet")) return petImg;
    return indoorImg;
  };

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">🌿 Explore Plant Categories</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.categoryID}
            className="category-card"
            onClick={() => onSelectCategory(cat.categoryID)}
          >
            <img src={getCategoryImage(cat.name)} alt={cat.name} />
            <div className="category-overlay">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}