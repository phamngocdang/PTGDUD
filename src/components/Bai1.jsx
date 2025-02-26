import React, { useState } from "react";
import "./Bai1.css";
import image from "./assets/image.png"; // Đảm bảo ảnh nằm trong thư mục `src/assets/`

const Bai1 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="logo">Chefify</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Nội dung chính */}
      <div className="main-content">
        {/* Bộ lọc bên trái */}
        <div className="filters">
          <h3>FILTERS</h3>
          <div className="filter-group">
            <h4>Type</h4>
            <label><input type="checkbox" /> Pan-fried</label>
            <label><input type="checkbox" /> Stir-fried</label>
            <label><input type="checkbox" checked readOnly /> Grilled</label>
            <label><input type="checkbox" checked readOnly /> Roasted</label>
            <label><input type="checkbox" /> Sauteed</label>
            <label><input type="checkbox" /> Baked</label>
            <label><input type="checkbox" /> Steamed</label>
            <label><input type="checkbox" /> Stewed</label>
          </div>

          <div className="filter-group">
            <h4>Time</h4>
            <input type="range" min="10" max="60" value="40" className="slider" />
          </div>
        </div>

        {/* Kết quả tìm kiếm */}
        <div className="results">
          <h2>Sorry, no results were found for "{searchTerm}"</h2>
          <img src={image} alt="No Results" className="no-results-image" />
          <p>We have all your Independence Day sweets covered.</p>

          {/* Gợi ý */}
          <div className="suggestions">
            <span className="tag">Sweet Cake</span>
            <span className="tag">Black Cake</span>
            <span className="tag">Pozole Verde</span>
            <span className="tag">Healthy food</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bai1;
