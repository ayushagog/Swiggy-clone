import React, { useEffect, useState,useRef } from 'react'
import Card from './Card';


export default function OnlineDelivery() {
    
        const [data,setData] = useState([])

        const targetRef = useRef(null);
        const [isSticky, setIsSticky] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            const rect = targetRef.current.getBoundingClientRect();
            if (rect.top <= 0) {
              setIsSticky(true);
            } else {
              setIsSticky(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
        
    
    
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
           
        
    
  return (
       <div className='max-w-[1200px] mx-auto gap-3 px-2' ref={targetRef}>
            <div className="flex my-5 items-center justify-between">
                <h4 className='text-[25px] font-bold'>Restaurants with online food delivery in Jodhpur
                </h4>
            </div>

            <div className={  ` hidden md:inline w-full left-0 ${isSticky ? 'fixed top-0 z-[999999] bg-white' : ''}`}>
            
                <div className="max-w-[1200px] mx-auto flex my-4 gap-3 ">
                    
                    <div className="p-1 border-2 border-slate-400 rounded-[14px] shadow "> Filter
                     </div>
                    <div className="p-1 border-2 border-slate-400 rounded-[14px] shadow ">Sort By</div>
                    <div className="  p-1 border-2 border-slate-400 rounded-[14px] shadow ">Book a Table</div>
                    <div className=" p-1 border-2 border-slate-400 rounded-[14px] shadow ">Within 5km</div>
                    <div className="p-1 border-2 border-slate-400 rounded-[14px] shadow ">Rating 4+</div>
                    <div className="p-1 border-2 border-slate-400 rounded-[14px] shadow ">Pure Veg</div>
                    <div className="p-1 rounded-[14px]  "> <input type="email" className=' w-[300px] outline-0 border-[1px] rounded-2xl p-1 '  name="search here.." placeholder='Search here...' id="" /> </div>
                    
                   </ div>

                   

                 

                  

                
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {
            data.map(
                (d,i)=>{
                    return <Card key={i}  {...d}/>
                }
            )
        }
        </div>
            
            </div>

               
  )
}
