import React, { useEffect, useState } from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";


export default function Category() {


    const [categories,setCategory]=useState([]);
    const [slide,setSlide]=useState(0);


    const fetchCategory = async ()=>{
        const response = await fetch('http://localhost:5000/api/category');
        const data = await response.json();
        setCategory(data);
        // console.log(categories);

    }

    useEffect(
        ()=>{
          
            fetchCategory();
        },[]

    )
       
    
    const prevSlide = ()=>{
      // console.log(categories.length);
      // console.log(slide+3)
      if(categories.length-8 == slide) return false
      setSlide(slide+3)
      console.log(slide+3)

    }

    const nextSlide = ()=>{
      // console.log(categories.length)
      if(slide == 0) return false
          setSlide(slide-3)
    }
    

  return (
    <>
    <div className='max-w-[1200px] mx-auto gap-3'>
        <div className="flex my-5 items-center justify-between">
            <h4 className='text-[25px] font-bold'>What's on your mind?</h4>
         <div className='flex gap-2'>
            <div onClick={prevSlide} className="cursor-pointer w-[30px] h-[30px] bg-[#02060c26] rounded-full flex justify-center items-center   "><FaArrowLeft /></div>
            <div onClick={nextSlide} className="cursor-pointer w-[30px] h-[30px] bg-[#02060c26] rounded-full  flex justify-center items-center"><FaArrowRight /></div>
            </div></div>
            
            <div  className="flex overflow-hidden">

{
  categories.map(
    (data,index)=>{
      return(
        <div style={{transform:`translateX(-${slide*100}%)`}} key={index} className='w-[150px] shrink-0 duration-300'>
         <img src={"http://localhost:5000/images/"+data.image} alt="" />
          </div>

      )
    }
  )
}
</div>
<hr className='my-4 border-[1px solid ]' />

    </div>
    
</>
  )
}
