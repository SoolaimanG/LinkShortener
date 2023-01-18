import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__zero">
          <h3>Shortly</h3>
        </div>
        <div className="footer__two">
          <div className="footer__three">
            <h4>Feauturing</h4>
            <ul>
              <li>Links Shorten</li>
              <li>Branded Links</li>
              <li>Analysics</li>
            </ul>
          </div>
          <div className="footer__three">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer__three">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__four">
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <BsPinterest />
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
