import React from "react";
import "./ShopPage.css";
import shoeImg from "../assets/img/R.png";
import BagImg from "../assets/img/Bag.png";
import BagImg2 from "../assets/img/Bag2.png";
import shoeImg6 from "../assets/img/R6.png";
import menu from "../assets/img/menu.png";
import mini from "../assets/img/mini.png";
export default function ShopPage() {
  const products = [
    {
      id: 1,
      label: "HOT",
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      discount: "24% Off",
       image: shoeImg,
    },
    {
      id: 2,
      label: "HOT",
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      discount: "24% Off",
      image: BagImg,
    },
    {
      id: 3,
      label: "HOT",
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      discount: "24% Off",
      image: BagImg2,
    },
  ];

  return (
    <div className="shop-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Hot Deals</h3>
        <ul>
          <li>Nike <span>(2)</span></li>
          <li>Airmax <span>(48)</span></li>
          <li>Adidas <span>(15)</span></li>
          <li>Vans <span>(21)</span></li>
          <li>All Stars <span>(23)</span></li>
        </ul>
        <div className="fil">
        <h3 >Prices</h3>
        <h5>Range<span>$12.34 -$23.45</span></h5>
        <input type="range" min="10" max="100" />
        
</div>
       
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Banner */}
        <div className="banner">
          <div className="banner-text">
            <h2>Adidas Men Running Sneakers</h2>
            <p>Performance and design. Taken right to the edge.</p>
            <button>SHOP NOW</button>
          </div>
          <img
            src={shoeImg6}
            alt="Sneakers"
          />
          
          
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <span>13 items</span>
          <select>
            <option>Sort By</option>
            <option>Price</option>
            <option>Name</option>
          </select>
          <select>
            <option>Show 12</option>
            <option>Show 24</option>
          </select>
          <div className="view">
            <img src={mini} alt=""/>
          </div>
          
          <img src= {menu} alt=""/>
          
        </div>

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
      </main>
    </div>
  );
}
