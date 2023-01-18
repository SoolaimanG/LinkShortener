import "./nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(true);
  return (
    <nav className="container header__container">
      <div className="header__one">
        <h3>Shortly</h3>
        <div className={`header__two ${open ? "hide" : "header__two"}`}>
          <h4>Features</h4>
          <h4>Pricing</h4>
          <h4>Resources</h4>
        </div>
      </div>
      <div className={`header__three ${open ? "hide" : "header__two"}`}>
        <a href="/">Login</a>
        <div className="header__four">
          <a className="small" href="/">
            Signup
          </a>
        </div>
      </div>
      <div onClick={() => setOpen((prev) => !prev)}>
        {open ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
    </nav>
  );
}

export default Nav;
