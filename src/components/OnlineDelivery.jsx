import React, { useEffect, useState, useRef } from "react";
import Card from './Card';  // or './card' if the file is named in lowercase

export default function OnlineDelivery() {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const cities = [
    "Bangalore", "Pune", "Mumbai", "Delhi", "Hyderabad", "Kolkata",
    "Chennai", "Chandigarh", "Ahmedabad", "Jaipur", "Nagpur",
    "Bhubaneswar", "Kochi", "Surat", "Dehradun", "Ludhiana", "Patna",
    "Mangaluru", "Bhopal", "Gurgaon", "Coimbatore", "Agra", "Noida",
    "Vijayawada", "Guwahati", "Mysore", "Pondicherry", "Thiruvananthapuram"
  ];

  const cuisines = [
    "Chinese", "South Indian", "Indian", "Kerala", "Korean", "North Indian",
    "Seafood", "Bengali", "Punjabi", "Italian", "Andhra", "Biryani", "Japanese",
    "Arabian", "Fast Food", "Jain", "Gujarati", "Thai", "Pizzas", "Asian", "Cafe",
    "Continental", "Mexican", "Mughlai", "Sushi", "Mangalorean", "Tibetan", "Barbecue"
  ];

  const CityList = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };

    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cities.slice(0, showMore ? cities.length : 12).map((city, index) => (
            <div key={index} className="p-4 rounded-md shadow-lg bg-white hover:bg-blue-100 cursor-pointer transition-all duration-300">
              Best Restaurants in {city}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-4">
          <button 
            onClick={handleShowMore} 
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    );
  };

  const CuisineList = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };

    return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cuisines.slice(0, showMore ? cuisines.length : 12).map((cuisine, index) => (
            <div key={index} className="p-4 rounded-md shadow-lg bg-white hover:bg-blue-100 cursor-pointer transition-all duration-300">
              {cuisine} Restaurant Near Me
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-4">
          <button 
            onClick={handleShowMore} 
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] p-[20px] mx-auto" ref={componentRef}>
      <hr className="my-4 border-[2px] mb-[30px]" />
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">Restaurants with online food delivery in Dharmavaram</div>
      </div>
      <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-30' : ''}>
        <div className="max-w-[1200px] max-auto flex my-4 gap-3">
          <div className="p-3 rounded-md shadow">Filter</div>
          <div className="p-3 rounded-md shadow">Sort by</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
      <hr className="border-[2px] mt-[30px]" />
      <div className="max-w-[1200px] p-[20px] mx-auto">
        <div className="flex my-5 items-center justify-between">
          <div className="text-[25px] font-bold">Best Places to Eat Across Cities</div>
        </div>
        <CityList />
        <hr className="my-4 border-[2px] mb-[30px]" />
        <div className="flex my-5 items-center justify-between">
          <div className="text-[25px] font-bold">Best Cuisines Near Me</div>
        </div>
        <CuisineList />
        <hr className="my-4 border-[2px] mb-[30px]" />
        <div className="flex my-5 items-center justify-between">
          <div className="text-[25px] font-bold">Explore Every Restaurants Near Me</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
          <div className="p-4 rounded-md shadow-lg bg-white hover:bg-blue-100 cursor-pointer transition-all duration-300">Explore Restaurants Near Me</div>
          <div className="p-4 rounded-md shadow-lg bg-white hover:bg-blue-100 cursor-pointer transition-all duration-300">Explore Veg Restaurants Near Me</div>
          <div className="p-4 rounded-md shadow-lg bg-white hover:bg-blue-100 cursor-pointer transition-all duration-300">Explore Non-Veg Restaurants Near Me</div>
        </div>
      </div>
      <hr className="my-4 border-[2px] mb-[30px]" />
      {/* Static "Contact Us" Section */}
      <div className="max-w-[1200px] p-[20px] mx-auto mt-10 bg-[#C9CFD7] ">
        <div className="text-center text-[20px] font-semibold">For better experience, download the Swiggy app now</div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="p-2 bg-green-500 text-white p-4 rounded-md shadow-lg  hover:bg-red-500 cursor-pointer transition-all duration-300">Download Android App</button>
          <button className="p-2 bg-blue-500 text-white p-4 rounded-md shadow-lg  hover:bg-yellow-500 cursor-pointer transition-all duration-300">Download iOS App</button>
        </div>
        <hr className="my-6 border-[2px]" />
        <div className="text-center text-[18px] ">
          <p className="font-bold">© 2024 Swiggy Limited</p>
          <div className="flex justify-center gap-8 mt-4 grid grid-cols-5 p-4 rounded-md shadow-lg bg-[#C9CFD7] hover:bg-blue-200 cursor-pointer transition-all duration-300">
            <a href="#">Company</a>
            <a href="#">About Us</a>
            <a href="#">Swiggy Corporate</a>
            <a href="#">Careers</a>
            <a href="#">Team</a>
            <a href="#">Swiggy One</a>
            <a href="#">Swiggy Instamart</a>
            <a href="#">Swiggy Dineout</a>
            <a href="#">Swiggy Genie</a>
            <a href="#">Contact us</a>
            <a href="#">Help & Support</a>
            <a href="#">Partner with us</a>
            <a href="#">Ride with us</a>
            <a href="#">Legal</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Investor Relations</a>
            <a href="#">Life at Swiggy</a>
            <a href="#">Explore with Swiggy</a>
            <a href="#">Swiggy News</a>
            <a href="#">Snackables</a>
          </div>
          <hr className="my-4 border-[2px]" />
          <div className="text-center p-4 rounded-md shadow-lg bg-[#C9CFD7] hover:bg-blue-200 cursor-pointer transition-all duration-300">Available in: Bangalore, Gurgaon, Hyderabad, Delhi, Mumbai, Pune (679 cities)</div>
          <div className="flex justify-center gap-4 mt-4 p-4 rounded-md shadow-lg bg-[#C9CFD7] hover:bg-blue-200 cursor-pointer transition-all duration-300">
            <a href="www.linkedin.com/in/shashi-kumar-b7a14226b/">LinkedIn</a>
            <a href="https://github.com/Shashikumarskgv">Git Hub</a>
            <a href="https://www.instagram.com/shashi_sk__143/">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
