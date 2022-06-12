import { useState } from "react";
import Data from "./Data";
import "./Testimonial.css";
const Testimonial = () => {
  const [current, setCurrent] = useState(Data[0]);
  console.log(Data[0]);
  const [active, setActive] = useState(Data[0]);
  const handelSetClick = (event) => {
    setCurrent(Data[event.target.getAttribute("data-quote")]);
    setActive(Data[event.target.getAttribute("data-quote")]);
  };
  console.log(Data);
  return (
    <div className="testimonial__wrapper  center__item">
      <div className="center__item testimonial__bg">
        <div className="testimonial__quote" style={{ width: "600px" }}>
          <h3>{current.quote}</h3>
          <span className="User__name center__item">{current.name}</span>

          <div className="dot__items center__item">
            {Data.map((item, index) => (
              <span
                onClick={(event) => handelSetClick(event)}
                data-quote={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
