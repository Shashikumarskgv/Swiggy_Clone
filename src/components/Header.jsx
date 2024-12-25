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
            visibility:toggle?"visible" : "hidden"
        }}>
            <div onClick={(e) =>{
                e.stopPropagation();
            }}
            className='w-[400px] bg-white h-full absolute duration-[200ms]'
               style={{
                left: toggle?"visible" :"hidden6"
               }}
            
            ></div>
        </div>
        <header className='p-[15px] shadow-xl text-[#686b78]'>
            <div className='max-w-[1200px] mx-auto  flex items-center'>
                <div className='w-[100px]'>
                    <img src="images/logo.png"  className='w-full'alt="" />
                    </div>
                    <div className=''>
                    <span className='font-bold '>Othars </span>     
                      Othars<RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019]
                      cursor-pointer'/>
                    </div>
                    <nav className='flex list-none gap-10  ml-auto font-semibold text-[18px]'>
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