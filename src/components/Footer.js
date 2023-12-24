import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <footer className="footer">
      <h2 className="footer__title">контакты</h2>
      <ul className="footer__contacts">
        <li className="footer__contacts-item">
          <a target="blank" href="https://www.instagram.com/">
            <FaInstagram className="footer__social" />
          </a>
        </li>
        <li className="footer__contacts-item">
          <a target="blank" href="https://www.linkedin.com/">
            <FaLinkedinIn className="footer__social" />
          </a>
        </li>
        <li className="footer__contacts-item">
          <a target="blank" href="https://www.facebook.com/">
            <FaFacebookF className="footer__social" />
          </a>
        </li>
        <li className="footer__contacts-item">
          <a target="blank" href="https://www.twitter.com/">
            <FaTwitter className="footer__social" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
