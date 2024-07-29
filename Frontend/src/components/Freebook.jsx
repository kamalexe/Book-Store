import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";

function Freebook() {
  // Filter the data to include only free books
  // const filterData = list.filter((item) => item.category === "free");
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4001/free");
        setBook(response.data);
      } catch (err) {
        console.error(err);
        console.error("Error fetching books:", err);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, minus,
          consectetur tempora praesentium hic sed nulla rerum, aliquid
          blanditiis doloribus molestias. Quaerat, odio necessitatibus facere
          repudiandae quisquam numquam iure saepe.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
