import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Company</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Payments</li>
            <li>Wallet</li>
            <li>UPI</li>
            <li>Fastag</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">  <span>Facebook</span>
    <svg> <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.993 4.388 10.961 10.125 11.927v-8.447H7.077v-3.48h3.048V9.413c0-3.007 1.791-4.67 4.533-4.67 1.312 0 2.687.235 2.687.235v2.977h-1.514c-1.49 0-1.95.928-1.95 1.878v2.235h3.327l-.532 3.48h-2.795v8.447C19.612 23.034 24 18.066 24 12.073z"/> </svg>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">  <span>Twitter</span>
    <svg><path fill="black" d="M23.643 4.937c-.835.37-1.732.62-2.675.733  .962-.576 1.703-1.49 2.048-2.577-.9.533-1.894.92-2.953 1.13-.847-.903-2.056-1.466-3.394-1.466-2.567 0-4.648 2.1-4.648 4.685 0 .37.04.73.12 1.08C7.69 8.094 4.066 6.128 1.64 3.162c-.41.703-.644 1.518-.644 2.39 0 1.654.833 3.118 2.11 3.98-.78-.026-1.513-.24-2.155-.6v.06c0 2.31 1.617 4.238 3.76 4.67-.395.108-.815.163-1.24.163-.305 0-.605-.03-.895-.09.605 1.903 2.36 3.293 4.435 3.333-1.63 1.28-3.68 2.045-5.915 2.045-.385 0-.765-.02-1.14-.07 2.11 1.353 4.6 2.142 7.29 2.142 8.77 0 13.56-7.33 13.56-13.69 0-.21-.005-.42-.013-.63.94-.685 1.76-1.545 2.41-2.525z"/></svg>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">  <span>Instagram</span>
    <svg>  <path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.318 3.608 1.293.975.975 1.23 2.243 1.293 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.318 2.633-1.293 3.608-.975.975-2.243 1.23-3.608 1.293-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.318-3.608-1.293-.975-.975-1.23-2.243-1.293-3.608C2.175 15.744 2.163 15.364 2.163 12s.012-3.584.07-4.85c.062-1.366.318-2.633 1.293-3.608.975-.975 2.243-1.23 3.608-1.293C8.416 2.175 8.796 2.163 12 2.163M12 0C8.69 0 8.286.01 7.052.07 5.72.13 4.605.38 3.68 1.305 2.755 2.23 2.505 3.345 2.445 4.677 2.385 5.91 2.375 6.31 2.375 9.62s.01 3.71.07 4.942c.06 1.333.31 2.448 1.235 3.373.925.925 2.04 1.175 3.373 1.235 1.233.06 1.633.07 4.942.07s3.71-.01 4.942-.07c1.333-.06 2.448-.31 3.373-1.235.925-.925 1.175-2.04 1.235-3.373.06-1.233.07-1.633.07-4.942s-.01-3.71-.07-4.942c-.06-1.333-.31-2.448-1.235-3.373-.925-.925-2.04-1.175-3.373-1.235C15.71.01 15.31 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8.001 4 4 0 0 1 0 8.001zm6.406-10.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/></svg>
  </a>
          </div>
        </div>
      </div>
      <div className="footer-banner">
        <p>Experience Secure and Fast Payments with Paytm 🚀</p>
      </div>
      <div className="footer-bottom">
        © 2025 Paytm . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
