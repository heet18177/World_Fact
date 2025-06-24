import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";
import "./footer.css"; // Assuming you have a CSS file for styling

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact-info">
          <p>
            <HiOutlineMail /> worldatlas123@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> +91 1234567890
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} World Atlas. All rights reserved.
      </div>
    </footer>
  );
};
