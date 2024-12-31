import React, { Component } from "react";
import Slider from "react-slick";
import FreeStuff from "@/components/ui/free-stuff";

const items = [
  {
    image: "/library-guide-images/SA-Discover.png",
    title: "Spitfire Audio BBCSO Discover",
    description:
      "Discover the world of orchestral music with Spitfire Audio's BBC Symphony Orchestra Discover edition.",
    link: "https://impactsoundworks.com/product/tokyo-scoring-strings/",
  },
  {
    image: "/library-guide-images/SA-Discover.png",
    title: "Another Title",
    description: "Another description for the second item.",
    link: "https://impactsoundworks.com/product/tokyo-scoring-strings/",
  },
  {
    image: "/library-guide-images/SA-Discover.png",
    title: "Another Title 2",
    description: "Another description for the second item but different this time.",
    link: "https://impactsoundworks.com/product/tokyo-scoring-strings/",
  },
  {
    image: "/library-guide-images/SA-Discover.png",
    title: "The title 3",
    description: "Another description for the third item this time.",
    link: "https://impactsoundworks.com/product/tokyo-scoring-strings/",
  },
  {
    image: "/library-guide-images/SA-Discover.png",
    title: "TITLE 4",
    description: "This is for the fourth item but different this time.",
    link: "https://impactsoundworks.com/product/tokyo-scoring-strings/",
  },
  // Add more items as needed
];

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-2">
            <FreeStuff image={item.image} title={item.title} description={item.description} link={item.link} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// export default SwipeToSlide;

function SwipeToSlide1() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
