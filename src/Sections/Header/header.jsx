import "./header.css";
import Nav from "../../Component/Nav/nav";
import BG from "../../Images/illustration-working.svg";

function Header() {
  return (
    <header>
      <Nav />
      <div className="container nav__one">
        <div className="nav__two">
          <h2>More than just shorter links</h2>
          <small>
            Buid your brand's recognition and get detailed insights on how your
            links are performing.
          </small>
          <div className="nav__three">
            <a className="btn" href="">
              Get Started
            </a>
          </div>
        </div>
        <div className="nav__four">
          <img src={BG} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
