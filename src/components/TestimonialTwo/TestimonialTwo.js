import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Data from "./Data";
import "./TestimonialTwo.css";

const TestimonialTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlider = Data[activeIndex];

  const handelNext = () => {
    if (activeIndex >= Data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  };
  const handelPrev = () => {
    if (activeIndex <= 0) {
      setActiveIndex(Data.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  };

  return (
    <div className="container">
      <div className="testimonial__heading">
        <p>see what our clients say about us !!</p>
        <h2>Testimonial</h2>
      </div>
      <SwitchTransition>
        <CSSTransition key={activeSlider.id} classNames="fade" timeout={300}>
          <div className="testimonial__wrapper">
            <div className="testimonial__info">
              <p>{activeSlider.quote} </p>
              <div className="testimonial__client">{activeSlider.name}</div>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div className="arrows">
        <div
          className="prev"
          onClick={handelPrev}
          role="button"
          tabIndex={0}
          onKeyDown={handelPrev}
        >
          <FaAngleLeft />
        </div>
        <div
          className="next"
          onClick={handelNext}
          role="button"
          tabIndex={0}
          onKeyDown={handelNext}
        >
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default TestimonialTwo;
