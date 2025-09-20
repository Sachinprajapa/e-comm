// import React from "react";
// import "./Navbar.css";
// import { FaShoppingCart } from "react-icons/fa";

//  function Navbar() {
//   return (
//     <nav className="navbar">
//       {/* Left Section - Logo + Brand */}
//       <div className="logo">
//         <span className="logo-icon">👁</span>
//         <h2>E-Comm</h2>
//       </div>

//       {/* Center Section - Menu */}
//       <ul className="nav-links">
//         <li><a href="#home" className="active">HOME</a></li>
//         <li><a href="#bag">BAG</a></li>
//         <li><a href="#sneakers">SNEAKERS</a></li>
//         <li><a href="#belt">BELT</a></li>
//         <li><a href="#contact">CONTACT</a></li>
//       </ul>

//       {/* Right Section - Cart */}
//       <div className="cart">
//         <FaShoppingCart size={18} />
//         <span>Items $0.00</span>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;



import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Section - Logo + Brand */}
      <div className="logo">
        <span className="logo-icon">👁</span>
        <h2>E-Comm</h2>
      </div>

      {/* Center Section - Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" className="active">HOME</a></li>
        <li><a href="#bag">BAG</a></li>
        <li><a href="#sneakers">SNEAKERS</a></li>
        <li><a href="#belt">BELT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      {/* Right Section - Cart */}
      <div className="cart">
        <FaShoppingCart size={18} />
        <span>Items $0.00</span>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>
    </nav>
  );
}

export default Navbar;
