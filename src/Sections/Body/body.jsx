import Card from "../../Component/Cards/card";
import Input from "../../Component/Input/input";
import "./body.css";

function Body() {
  return (
    <section className="Body__one">
      <Input className="Body__two" />
      <div className="container Body__three">
        <div>
          <h3>Advance Statistics</h3>
          <span>
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard
          </span>
        </div>
      </div>
      <Card />
    </section>
  );
}

export default Body;
