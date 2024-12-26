import React, { useEffect, useState } from "react";
import Card from './Card'; // or './card' if the file is named in lowercase
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function TopRest() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index for the visible cards

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const handleNext = () => {
    // Move to the next set of cards
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length -4));
  };

  const handlePrev = () => {
    // Move to the previous set of cards
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="max-w-[1200px] p-[20px] mx-auto px-2">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold">Top Restaurant chains in Dharmavaram</div>
        <div className="flex">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={handlePrev} // Trigger handlePrev when the left arrow is clicked
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={handleNext} // Trigger handleNext when the right arrow is clicked
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <br />

      <div className="flex gap-5 overflow-hidden">
        {data.slice(currentIndex, currentIndex + 4).map((d, i) => (
          <Card width="w-full md:w-[260px]" {...d} key={i} />
        ))}
      </div>
    </div>
  );
}
