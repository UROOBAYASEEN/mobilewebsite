
"use client"

import Image from 'next/image'
import { CiMobile3 } from "react-icons/ci";

import React, { useState } from 'react'


import { MdNewReleases, MdSdStorage, MdVideoCameraBack, MdVideoCameraFront } from 'react-icons/md';
import { GiProcessor } from 'react-icons/gi';
import { FaBatteryFull } from 'react-icons/fa6';
import { SiGoogledisplayandvideo360 } from 'react-icons/si';
import { LiaPhoenixFramework } from 'react-icons/lia';
import { IoIosFlash } from 'react-icons/io';
import { samsungdata } from '@/app/database/Samsung';




const Page =  ({params}:any) => {
  const [Imageindex, SetImageindex] = useState(0)
   
    
 const  {models}= params
 const getarry=  samsungdata.filter((val)=>val.id==models
 )


 const cartobject={
  id:models,
  model:getarry?.[0]?.model,
  price:getarry?.[0]?.price,
  imageurl:getarry?.[0]?.image_url,
  Catagaries:'Samsung',
  quantity:1
  

}
const  addcart=()=>{

const adding = localStorage.getItem("CartData"); 
if (adding) {
  const cartArray = JSON.parse(adding);
  cartArray.push(cartobject); 
  localStorage.setItem("CartData", JSON.stringify(cartArray)) 
}
}


 


    
 
    
    
    
  return (
   
    
    
<div className='   py-10  border border-red-700 mt-[65px]  '  >
 <div className=' py-10   justify-between md:flex '>
  <div className='border border-red-700 bg-red-700 rounded-2xl my-10 md:px-20'>
   
   
  <img
   src={getarry?.[0]?.imagegellery?.[Imageindex]||""}
  
   
   className='  h-[400px] w-[100%] bg-cover bg-no-repeat object-cover p-2 bg-center  '
  ></img>
  <div className='flex mt-10 gap-3 '>
  <img
   src={getarry?.[0]?.imagegellery?.[0]||""}
   
   
   className='border h-[80px] w-[80px] border-white rounded-2xl cursor-pointer active:border-black'
   onClick={()=>{SetImageindex(0)}}
  ></img>
   <img
   src={getarry?.[0]?.imagegellery?.[1]||""}
  
   
     className='border border-white rounded-2xl cursor-pointer active:border-black h-[80px] w-[80px]'
     onClick={()=>{SetImageindex(1)}}
  ></img> <img
  src={getarry?.[0]?.imagegellery?.[2]||""}
 
  
    className='border h-[80px] w-[80px] border-white rounded-2xl cursor-pointer active:border-black'
    onClick={()=>{SetImageindex(2)}}
 ></img>
  </div>
  </div>
  <div className=' bg-white px-3 py-10'>
    
        <h1 className="text-4xl text-red-600 font-bold   mb-10 uppercase tracking-tighter">{getarry?.[0]?.model}</h1>
    <h1 className='uppercase  font-light tracking-[-0.1rem] flex   py-3 hover: text-red-600'>  <span className='flex
     font-bold mx-3 gap-2'><CiMobile3  className='hover:text-3xl '/> modelname: </span><span>  {getarry?.[0]?.model}</span></h1>
     {/* <h1 className='uppercase text-2xl font-[400] tracking-[-0.1rem] flex   pt-3'><span className='flex  font-bold mx-3 gap-2'><LuTableProperties /> properties: </span>  {getarry?.[0]?.description}</h1> 
 */}

    <h1 className='uppercase  font-light tracking-[-0.1rem] flex   pt-3  hover: text-red-600'> <span className='flex font-bold   gap-2'><MdNewReleases className='hover:text-3xl ' /> realease-year:  </span>      {getarry?.[0]?.release_year}</h1>
    <h1 className='uppercase  font-[400] tracking-[-0.1rem] flex    pt-3 hover: text-red-600'> <span className='flex   font-bold  gap-2'><GiProcessor className='hover:text-3xl '  />Processor </span>  {getarry?.[0]?.processor}</h1>
    {/* <h1>{getarry?.[0]?.price}</h1> */}
    <h1 className='uppercase  font-light tracking-[-0.1rem] flex   pt-3 hover: text-red-600'> <span className='flex font-bold   gap-2'><MdVideoCameraFront className='hover:text-3xl ' />Front cammra</span>   {getarry?.[0]?.camera?.front}</h1>
    <h1 className='uppercase  font-light tracking-[-0.1rem] flex    pt-3 hover: text-red-600'> <span className='flex font-bold  gap-2'><MdVideoCameraBack  className='hover:text-3xl ' />Reare Camra</span>    {getarry?.[0]?.camera?.rear}</h1>
    <h1  className='uppercase  font-light tracking-[-0.1rem] flex   pt-3 hover: text-red-600 ' ><span className='flex   font-bold  gap-2 tracking-tighter'><MdSdStorage className='hover:text-3xl ' />Storage</span> {getarry?.[0]?.storage}</h1>
    <h1 className='uppercase  font-light tracking-[-0.1rem] flex   pt-3 hover: text-red-600'><span className='flex   font-bold  gap-2'><FaBatteryFull className='hover:text-3xl ' />Battery</span> {getarry?.[0]?.battery}</h1>
    <h1 className='uppercase  font-light tracking-[-0.1rem] flex   pt-3 hover: text-red-600'><span className='flex   font-bold  gap-2'><SiGoogledisplayandvideo360 className='hover:text-3xl'  />Display</span> {getarry?.[0]?.display}</h1>
    <h1 className='uppercase  font-light tracking-[-0.1rem] flex    pt-3 hover: text-red-600'><span className='flex   font-bold  gap-2'> <LiaPhoenixFramework  className='hover:text-3xl '/>Ram</span> {getarry?.[0]?.ram}</h1>
    <h1 className='uppercase  font-light tracking-[-0.1rem] flex   pt-3 hover: text-red-600'><span className='flex  font-bold  gap-2'><IoIosFlash  className='hover:text-3xl '/>OS</span> {getarry?.[0]?.os}</h1>
    {/* <h1>{getarry?.[0]?.price}</h1> */}
    <div className='flex gap-10 mt-10 mx-3'>
        <button className='uppercase bg-red-600 text-white font-bold px-3 py-4 '> price: {getarry?.[0]?.price}</button>
        <button  className='uppercase bg-red-600 text-white font-bold  px-3 py-4 'onClick={ addcart}>add to card</button>
    </div>
    
    
    
    
  </div>
  
  
</div> 


</div>

    
    
  )
}

export default Page



























































































































