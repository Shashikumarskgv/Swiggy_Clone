import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";



export default function Header(){
    const [toggle,setToggle] = useState(false);
    const showSideMenu = ()=> {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }
    const links = [
    {
        icons :<IoSearch />,
        name : "Search"
    },
    {  
        icons :<CiDiscount1 />,
        name : "Offers",
        sup : "New"
    },
    {
        icons :"",
        name : "Help"
    },
    {
        icons :"",
        name : "Sign In"
    },
    {   
        icons :"",
        name : "Cart",
        sup : "(2)"
    },
]

    return(
        <>
        <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
            opacity: toggle ? 1 : 0,
            visibility:toggle?"visible" : "hidden",
            zIndex:99999999999999
        }}>
            <div onClick={(e) =>{
                e.stopPropagation();
            }}
            className='w-[400px] bg-white h-full absolute duration-[200ms]'
               style={{
                left: toggle?"visible" :"hidden6"
               }}
            
            >
               <div>
                   
                   
                      <section id="about" class="bg-gray-100 py-10">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-6">About Me</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-4">
      Hi, I'm <strong>Shashi</strong>, the creator behind this website! I'm passionate about using technology to solve real-world problems and enhance user experiences. With a background in software development and a keen interest in Artificial Intelligence. 
    </p>
    <div className='flex gap-3'>
    <div class="text-center mt-6">
      <a href="https://www.linkedin.com/in/shashi-kumar-b7a14226b/" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">LinkedIn</a>
    </div>
    <div class="text-center mt-6">
      <a href="https://www.instagram.com/shashi_sk__143/" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Instagram</a>
    </div>
    <div class="text-center mt-6">
      <a href="9490059011" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Contact Me</a>
    </div>

    </div>
    
  </div>
</section>

      
               
 </div>
        


                </div>     

                </div>
        <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
            <div className='max-w-[1200px] mx-auto  flex items-center'>
                <div className='w-[100px]'>
                    <img src="images/logo.png"  className='w-full'alt="" />
                    </div>
                    <div className=''>
                    <span className='font-bold '>About me </span>     
                      "Shashi"<RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019]
                      cursor-pointer'/>
                    </div>
                    <nav className='hidden md:flex list-none gap-10  ml-auto font-semibold text-[18px]'>
                       
                        {
                            links.map(
                                (link, index) =>{
                                   return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                                        {link.icons}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                            
                        </li>
                                }
                            )


                        }
                      
                      
                        
                    </nav>
            </div>

        </header>
        </>
    );
}