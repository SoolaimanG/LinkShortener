import image1 from "../../Images/icon-brand-recognition.svg";
import image2 from "../../Images/icon-detailed-records.svg";
import image3 from "../../Images/icon-fully-customizable.svg";
import "./card.css";

function Card() {
  const data = [
    {
      id: 1,
      img: image1,
      head: "Brand Recognition",
      article:
        "Boost your brand recognition with each click,Generic links don't mean a thing.Branded links help install confidence in your content.",
    },
    {
      id: 2,
      img: image2,
      head: "Detailed Records",
      article:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      img: image3,
      head: "Fully Customizable",
      article:
        "Improve brand aviareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <article className="container cards__one">
      <div className="cards__two"></div>
      <div className="cards__three">
        {data.map((item) => {
          return (
            <div className="cards__five" key={item.id}>
              <div className="cards__four">
                <img src={item.img} alt="" />
              </div>
              <div className="cards__six">
                <h4>{item.head}</h4>
                <small>{item.article}</small>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Card;
