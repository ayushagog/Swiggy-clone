import React, { useEffect, useState } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import Card from './Card';

export default function TopRest() {


    const [data,setData]=useState([]);
    const [slide,setSlide]=useState(0);


    const fetchTopRestaurant = async ()=>{
        const response = await fetch('http://localhost:5000/api/restaurantChains');
        const apiData = await response.json();
        setData(apiData);
        // console.log(categories);

    }

    useEffect(
        ()=>{
          
            fetchTopRestaurant();
        },[]

    )
       
    const prevSlide = ()=>{
        // console.log(categories.length);
        // console.log(slide+3)
        if(categories.length-8 == slide) return false
        setSlide(slide+3)
  
      }
  
      const nextSlide = ()=>{
        // console.log(categories.length)
        if(slide == 0) return false
            setSlide(slide-3)
      }

    

  return (
    <>
    <div className='max-w-[1200px] mx-auto gap-3  px-x'>
        <div className="flex my-5 items-center justify-between">
            <h4 className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</h4>
         <div className='flex gap-2'>
            <div  className="cursor-pointer w-[30px] h-[30px] bg-[#02060c26] rounded-full flex justify-center items-center   " onClick={prevSlide}><FaArrowLeft /></div>
            <div  className="cursor-pointer w-[30px] h-[30px] bg-[#02060c26] rounded-full  flex justify-center items-center" onClick={nextSlide}><FaArrowRight /></div>
            </div></div>

            <div className="flex gap-4 overflow-hidden"  >
               {
                data.map(
                    (d,index)=>{
                        return(
                            <Card width='w-full md:w-[273px]' key={index} {...d} />
                        )
                    }
                )
               }

            </div>
            
        


    </div>
    
</>
  )
}
