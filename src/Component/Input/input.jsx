import { useEffect } from "react";
import { useState } from "react";
import "./input.css";

const Input = () => {
  // STATES
  let links = {};
  const id = Date.now();
  const [input, setInput] = useState("");
  const [condition, setCondition] = useState(true);
  const [link, setLink] = useState("");
  const [show, setShow] = useState([]);
  const [copyState, setCopyState] = useState("Copy");

  // API Call
  const API = async () => {
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${input}/very/long/link.html`
    );
    const data = await res.json();
    const receive = data.result;
    console.log(receive);
    if (input == "") {
      console.log("Empty");
    } else {
      const response_link = receive.full_short_link;
      const original_link = receive.original_link;
      links = { id, response_link, original_link, condition };
      console.log(links);
      setShow((prev) => [links, ...prev]);
    }
  };

  // CONTROLLING THE FETCH CALL
  useEffect(() => {
    API();
  }, [link]);

  // COPY FUCTION

  const Copy = (prop) => {
    navigator.clipboard.writeText(prop);
  };

  const Click = (id) => {
    setCopyState((prev) => !prev);
  };
  return (
    <div className="form__zero">
      <form className="container form__container" action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          placeholder="Shorten a link here..."
          type="text"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setLink(input);
          }}
        >
          Shorten it!
        </button>
      </form>
      <div className="container">
        {show.map((items) => {
          return (
            <div className="dummy__one" key={items.id}>
              <div className="dummy__two">
                <small>{items.response_link}</small>
                <button
                  className={copyState == "Copied" ? "copied" : ""}
                  onClick={() => {
                    Copy(items.response_link);
                    Click(items.condition);
                    items.condition = items.condition
                      ? (items.condition = false)
                      : (items.condition = true);
                    console.log(items.condition);
                  }}
                >
                  {items.condition ? "Copy" : "Copied"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Input;
