 import React from "react";
import "../Components/Footer.css";
function Footer(){
    return(
        <>
        <footer className="footer">
          <div className="footer-content1">
            {/* Left */}
            <div className="footer-box">
              <h2>E-Comm</h2>
              <p>
                Lorem ipsum dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since.
              </p>
            </div>

            {/* Follow Us */}
            <div className="footer-box">
              <h3>Follow Us</h3>
              <p>
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div>🌐 Twitter</div>
              <div>📘 Facebook</div>
            </div>

            {/* Contact */}
            <div className="footer-box">
              <h3>Contact Us</h3>
              <p>
                E-Comm, 4578 <br />
                Marmora Road, <br />
                Glasgow D04 89GR
              </p>
            </div>

            {/* Services */}
            <div className="footer-box">
              <h3>Service</h3>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            {/* My Account */}
            <div className="footer-box">
              <h3>My Account</h3>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            {/* Our Offers */}
            <div className="footer-box">
              <h3>Our Offers</h3>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 E-Comm. Designed by Vasu</p>
            <div className="payment-icons">
              💳 🏦 💰
            </div>
          </div>
        </footer>
        </>
    )
}
 export default Footer;