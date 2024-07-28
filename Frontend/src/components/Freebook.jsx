import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"; // Adjust the path if necessary
import Card from "./Card";

function Freebook() {
  // Filter the data to include only free books
  const filterData = list.filter((item) => item.category === "free");

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
          {filterData.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
