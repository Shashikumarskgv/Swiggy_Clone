import React, { useEffect, useState } from 'react';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

export default function Category(){
    const [slide, setSlide] = useState(3);

    const [categories,setCategory] = useState([]);
        
        const fetchCategory = async ()=> {
            const response = await fetch("http://localhost:5000/categories");
            const data = await response.json();
            setCategory(data);
        }
        useEffect(
            () => {
                fetchCategory();
            }, []
        )

        const nextSlide = () =>{
            if (categories.length -8== slide) return false;
            setSlide(slide + 3)
        }
        const prevSlide = () =>{
            if (slide == 0) return false;
            setSlide(slide - 3)
        }
    return(
        
        <div className='max-w-[1200px] p-[20px] mx-auto px-2'>
        <div className='flex items-center justify-between'>
            <div className='text-[25px] font-bold'>What's on your mind</div>
            <div className='flex '>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><FaArrowLeft/></div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRight/></div>
            </div>
        </div>
            
            <div className='group flex p-[20px] overflow-hidden  '>
            {
                categories.map(
                    (cat, index)=> {
                        return(
                            <div style={{
                                transform: `translateX(-${slide * 100}%)`,
                            }}
                            
                            key={index} className='w-[145px] shrink-0 duration-500'>
                                <img src={"http://localhost:5000/images/" +cat.image} alt="" 
                                className=''/>

                            </div>
                        )
                    }
                )
            }</div>
            <hr className=' border-[2px]'/>
                    </div>
    )
}