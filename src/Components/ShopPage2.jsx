import React from "react";
import "./ShopPage2.css";
import shoeImg2 from "../assets/img/R2.png";
import shoeImg3 from "../assets/img/R3.png";
import shoeImg4 from "../assets/img/R4.png";
export default function ShopPage() {
  const products = [
    {
      id: 1,
      label: "HOT",
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      discount: "24% Off",
      image: shoeImg2,
    },
    {
      id: 2,
      label: "HOT",
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      discount: "24% Off",
      image: shoeImg3,
    },
    {
      id: 3,
      label: "HOT",
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      discount: "24% Off",
      image: shoeImg4,
    },
  ];

  return (
    <div className="shop-page1">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Color</h3>
        <div className="color-filters">
          <span className="color-box red"></span>
          <span className="color-box blue"></span>
          <span className="color-box yellow"></span>
          <span className="color-box pink"></span>
          <span className="color-box black"></span>
        </div>
        <div className="size-filters">
        <h3>Brand</h3>
        <ul>
          <li>Nike (99)</li>
          <li>Adidas (99)</li>
          <li>Sneakers (99)</li>
        </ul>

        <button className="more-btn">MORE</button>
        </div>
      </aside>

      {/* Main Section */}
      <main className="main-content">
        {/* Products */}
        <div className="products">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <span className="label">{p.label}</span>
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p className="price">
                ${p.price} <span className="old">${p.oldPrice}</span>{" "}
                <span className="discount">{p.discount}</span>
              </p>
              <p>⭐⭐⭐⭐☆</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="active">1</button>
          <button>2</button>
          <button >3</button>
          <button>4</button>
          <button>5</button>
        </div>

        {/* Footer */}
       
      </main>
    </div>
  );
}
