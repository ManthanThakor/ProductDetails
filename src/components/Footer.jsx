import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Subscription */}
      <div className="footer-newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} MR PRODUCT. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
