import React from 'react';
import Avatar from '@mui/material/Avatar';
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialThree.css'




const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};



const TestimonialThree = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    };
    return (
        <div className="testimonial" style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "30%", textAlign: "center" }}>
          <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
          </Slider>
        </div>
      </div>
    );
};
const Card = ({ img }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />
        <p>
          Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
          Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
          tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
          fringilla massa. Etiam hendrerit dolor eget rutrum
        </p>
        <p style={{ fontStyle: "italic", marginTop: 25 }}>
          <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
          Media Analyst
        </p>
      </div>
    );
  };
export default TestimonialThree;