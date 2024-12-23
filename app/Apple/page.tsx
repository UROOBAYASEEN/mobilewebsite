import Mbl from "../components/Mbl";
import { iPhones } from "../database/Apple";
import React from "react";

const page =  async () => {

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[65px]'>
          
  { iPhones.map((val ,ind)=>
  <div key={ind} className='border hover:border-black p-2 m-5 shadow-2xl shadow-red-700 rounded-3xl hover:p-[10px] ' ><Mbl name={val.model} replace={val.name}  image={val.image_url} price={val.price} description={val.description} id={val.id} route={val.model}/></div>
  
  )}
  
  
      </div>
    )
  }

//  export const getStaticProps=async ()=>{

//   const Iphones=await iPhones

//  }
  
  export default page